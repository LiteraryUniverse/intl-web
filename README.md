# Literary Universe intl-web
[![Crowdin](https://badges.crowdin.net/literary-universe/localized.svg)](https://crowdin.com/project/literary-universe)

Localization for Literary Universe web app. The translation is being managed via Crowding. Please see [our page](https://crowdin.com/project/literary-universe) there to get easily started with translations.

If you have any questions feel free to open issue or to [contact us via Crowdin](https://crowdin.com/project/literary-universe/discussions).

## Rspack isolated JSON loaders (updated 2026-02-18)

For isolated page-level translation bundles (`faq.json`, `comparisons.json`, `signup.json`, `the_way.json`, `cookieconsent.json`, `tours.json`), use the centralized loaders in:

- `/imports/i18n/isolatedLoaders.ts`

Use these helpers from app code instead of importing `meteor/lu-intl/<locale>/<file>.json` directly:

- `loadFaqMessages(locale)`
- `loadComparisonsMessages(locale)`
- `loadSignupMessages(locale)`
- `loadTheWayMessages(locale)`
- `loadCookieConsentMessages(locale)`
- `loadToursMessages(locale)`

This keeps all isolated JSON imports explicit and discoverable for Rspack bundling.

## Resources

* [How to contribute to open source project on Github](http://blog.davidecoppola.com/2016/11/howto-contribute-to-open-source-project-on-github/)
* [Message Syntax](http://formatjs.io/guides/message-syntax/)
* [ICU Guide](http://userguide.icu-project.org/formatparse/messages)
* [Languages plural rules](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)

