/**
 * Validates a locale's translation files against the English source.
 * Reports missing keys, obsolete keys, empty values, non-string values and
 * ICU placeholder-name mismatches. Dependency-free by design (like
 * buildIndex.mjs); full ICU compilation is covered by the apps' test suites.
 *
 * Usage: node scripts/validateLocale.mjs <locale>   e.g. ar-SA
 * Exits 1 when any problem is found.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const locale = process.argv[2]
if (!locale) {
  console.error('Usage: node scripts/validateLocale.mjs <locale>')
  process.exit(1)
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const flatten = (obj, prefix = '') =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flatten(value, path))
    } else {
      acc[path] = value
    }
    return acc
  }, {})

// Top-level ICU argument names ({name} / {name, plural, ...}), ignoring
// select/plural branch contents — good enough to catch renamed placeholders.
const argNames = (message) => {
  const names = new Set()
  let depth = 0
  for (const match of String(message).matchAll(/[{}]|\{\s*([A-Za-z0-9_]+)/g)) {
    if (match[0] === '}') depth = Math.max(0, depth - 1)
    else if (match[1] !== undefined) {
      if (depth === 0) names.add(match[1])
      depth += 1
    } else depth += 1
  }
  return names
}

const problems = []
const files = readdirSync(join(root, 'en')).filter(
  (file) => file.endsWith('.json') && file !== 'index.json',
)

for (const file of files) {
  const en = flatten(JSON.parse(readFileSync(join(root, 'en', file), 'utf8')))
  let target
  try {
    target = flatten(
      JSON.parse(readFileSync(join(root, locale, file), 'utf8')),
    )
  } catch (error) {
    problems.push(`${file}: unreadable — ${error.message}`)
    continue
  }
  for (const key of Object.keys(en)) {
    if (!(key in target)) {
      problems.push(`${file}: missing "${key}"`)
      continue
    }
    const value = target[key]
    if (typeof value !== typeof en[key]) {
      problems.push(`${file}: wrong type for "${key}"`)
    } else if (value === '') {
      problems.push(`${file}: empty "${key}"`)
    } else if (typeof value === 'string') {
      const missing = [...argNames(en[key])].filter(
        (name) => !argNames(value).has(name),
      )
      if (missing.length > 0) {
        problems.push(
          `${file}: "${key}" drops placeholder(s) {${missing.join('}, {')}}`,
        )
      }
    }
  }
  for (const key of Object.keys(target)) {
    if (!(key in en)) problems.push(`${file}: obsolete "${key}"`)
  }
}

if (problems.length > 0) {
  for (const problem of problems) console.error(problem)
  console.error(`\n${locale}: ${problems.length} problem(s)`)
  process.exit(1)
}
console.log(`${locale}: OK (${files.length} files)`)
