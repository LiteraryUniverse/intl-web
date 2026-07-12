# Literary Universe intl-web

[![Translate on Weblate](https://img.shields.io/badge/translate-Weblate-1abc9c)](https://trs.literaryuniverse.com)

Localization for the Literary Universe web app. Translations are managed in our
self-hosted **[Weblate](https://trs.literaryuniverse.com)** (migrated from
Crowdin, 2026-05). Head there to start translating — no Git knowledge needed.

Questions or a mistake in the source text? [Open an issue](https://github.com/LiteraryUniverse/intl-web/issues/new/choose).

## Structure

Everything is **JSON** (there are no `.js` source files anymore):

- `en/<module>.json` — the English **source of truth**. Only English is edited
  here (via PR); every other locale is translated in Weblate, which writes
  translations back as PRs to `master`.
- `<locale>/<module>.json` — per-locale translations (Weblate-managed).
- `<locale>/index.json` — **generated, do not hand-edit.** The merged runtime
  bundle the app fetches. Regenerated and committed by CI (`build-index`
  workflow) on every push to `master`.
- 8 namespaces are kept **out** of `index.json` and lazy-loaded on demand:
  `faq`, `comparisons`, `signup`, `the_way`, `cookieconsent`, `tours`,
  `eventSignup`, `sharingCanvas`.

## Build

`scripts/buildIndex.mjs` is the single source of truth for merging
`<module>.json` → `<locale>/index.json` (deterministic, zero-dependency Node).
It runs in CI here and, via a thin shim, as the app's `npm run
intl:export-public` / `prestart`. Never edit `index.json` by hand.

## App integration

Consume the 8 isolated namespaces through the centralized loaders in
`app/imports/i18n/isolatedLoaders.ts` rather than importing the JSON directly:

- `loadFaqMessages(locale)`
- `loadComparisonsMessages(locale)`
- `loadSignupMessages(locale)`
- `loadTheWayMessages(locale)`
- `loadCookieConsentMessages(locale)`
- `loadToursMessages(locale)`
- `loadEventSignupMessages(locale)`
- `loadSharingCanvasMessages(locale)`

Everything else is served from the per-locale `index.json` bundle.

## Validation

`node scripts/validateLocale.mjs <locale>` (e.g. `ar-SA`) checks a locale
against the English source: key parity (missing/obsolete), empty values,
value types and top-level ICU placeholder parity. Run it before shipping a
locale publicly; ICU *compilation* is covered by the apps' test suites.

Arabic (`ar-SA`) is the first RTL locale and the canonical target for all
`ar-*` browser tags. Keep it at full key parity — the main app maps every
Arabic variant to this single translation set.

## Resources

* [Message Syntax (FormatJS)](http://formatjs.io/guides/message-syntax/)
* [ICU MessageFormat guide](http://userguide.icu-project.org/formatparse/messages)
* [CLDR plural rules](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
