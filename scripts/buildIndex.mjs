/**
 * buildIndex.mjs — single source of truth for generating per-locale index.json.
 *
 * Merges the per-module *.json source files in each <locale>/ folder into one
 * <locale>/index.json that the app fetches at runtime.
 *
 * Used in two places (must stay the only implementation):
 *   - intl-web CI on push to master (commits the regenerated index.json)
 *   - the app's local dev `npm run intl:export-public` (via a thin shim)
 *
 * Self-contained: plain Node ESM, zero dependencies, so intl-web CI needs only
 * `node`. Deterministic output (sorted locales + sorted modules + trailing
 * newline) so CI never produces spurious diffs.
 *
 * Run: node scripts/buildIndex.mjs   (cwd-independent; resolves its own root)
 */

import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const INTL_ROOT = path.resolve(__dirname, '..')

/**
 * Namespaces deliberately kept OUT of index.json: they are lazy-loaded on
 * demand by imports/i18n/isolatedLoaders.ts (IsolatedIntlNamespace). Must be
 * the full set of 8 — after the .js→.json migration the merge filter can no
 * longer rely on a .js/.json extension split, so this is explicit.
 */
const ISOLATED_NAMESPACES = new Set([
  'comparisons',
  'cookieconsent',
  'faq',
  'signup',
  'the_way',
  'tours',
  'eventSignup',
  'sharingCanvas',
])

/** index.json itself is generated; never merge it into itself. */
const EXCLUDED = new Set(['index', ...ISOLATED_NAMESPACES])

/**
 * Keys that must exist in the generated EN bundle. Their absence means source
 * modules are missing from the working tree — fail loudly rather than ship a
 * truncated English bundle that every other locale falls back to.
 */
const REQUIRED_EN_KEYS = [
  'org.otherOrgs',
  'user.dashboardWelcome',
  'user.profile.visit',
]

function isModuleFile(name) {
  if (!name.endsWith('.json')) return false
  return !EXCLUDED.has(path.basename(name, '.json'))
}

async function listLocaleDirs() {
  const entries = await readdir(INTL_ROOT)
  const dirs = []
  for (const entry of entries) {
    if (entry.startsWith('.') || entry === 'scripts') continue
    const full = path.join(INTL_ROOT, entry)
    if ((await stat(full)).isDirectory()) dirs.push(entry)
  }
  return dirs.sort()
}

async function buildLocale(localeName) {
  const localeDir = path.join(INTL_ROOT, localeName)
  const files = (await readdir(localeDir)).filter(isModuleFile).sort()

  const merged = {}
  for (const file of files) {
    const raw = await readFile(path.join(localeDir, file), 'utf8')
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (error) {
      throw new Error(`Invalid JSON in ${localeName}/${file}: ${error.message}`)
    }
    Object.assign(merged, parsed)
  }

  // Defensive: a stray `locales` array key must never reach the runtime bundle.
  delete merged.locales

  if (localeName === 'en') {
    const missing = REQUIRED_EN_KEYS.filter((key) => !(key in merged))
    if (missing.length > 0) {
      throw new Error(
        `Generated EN index is missing required keys: ${missing.join(', ')}. ` +
          'Source modules are probably missing from the working tree.',
      )
    }
  }

  await writeFile(
    path.join(localeDir, 'index.json'),
    `${JSON.stringify(merged, null, 2)}\n`,
    'utf8',
  )
  return Object.keys(merged).length
}

async function main() {
  const locales = await listLocaleDirs()
  console.log(`Building index.json for ${locales.length} locales...`)
  for (const locale of locales) {
    const count = await buildLocale(locale)
    console.log(`  ${locale}: ${count} messages`)
  }
  console.log('Done.')
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
