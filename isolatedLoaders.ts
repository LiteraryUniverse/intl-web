type IntlMessages = Record<string, unknown>

type JsonModule = {
  default?: IntlMessages
} & IntlMessages

type JsonImporter = () => Promise<JsonModule>

type PackageLocale =
  | 'en'
  | 'cs-CZ'
  | 'sk-SK'
  | 'es-ES'
  | 'de-DE'
  | 'ja-JP'
  | 'pl-PL'
  | 'fr-FR'
  | 'pt-PT'
  | 'ru-RU'
  | 'id-ID'
  | 'uk-UA'
  | 'nl-NL'
  | 'it-IT'
  | 'fi-FI'
  | 'et-EE'
  | 'hu-HU'
  | 'no-NO'
  | 'sv-SE'
  | 'eo-UY'
  | 'vi-VN'
  | 'ko-KR'
  | 'zh-TW'
  | 'ar-SA'

export type IsolatedIntlNamespace =
  | 'comparisons'
  | 'faq'
  | 'signup'
  | 'the_way'
  | 'cookieconsent'
  | 'tours'

const localeMap: Record<string, PackageLocale> = {
  en: 'en',
  'en-US': 'en',
  'en-UK': 'en',
  'en-CA': 'en',
  'en-AU': 'en',
  'en-NZ': 'en',
  cs: 'cs-CZ',
  'cs-CZ': 'cs-CZ',
  sk: 'sk-SK',
  'sk-SK': 'sk-SK',
  es: 'es-ES',
  'es-ES': 'es-ES',
  de: 'de-DE',
  'de-DE': 'de-DE',
  ja: 'ja-JP',
  'ja-JP': 'ja-JP',
  pl: 'pl-PL',
  'pl-PL': 'pl-PL',
  fr: 'fr-FR',
  'fr-FR': 'fr-FR',
  pt: 'pt-PT',
  'pt-PT': 'pt-PT',
  'pt-BR': 'pt-PT',
  ru: 'ru-RU',
  'ru-RU': 'ru-RU',
  id: 'id-ID',
  'id-ID': 'id-ID',
  uk: 'uk-UA',
  'uk-UA': 'uk-UA',
  nl: 'nl-NL',
  'nl-NL': 'nl-NL',
  it: 'it-IT',
  'it-IT': 'it-IT',
  fi: 'fi-FI',
  'fi-FI': 'fi-FI',
  et: 'et-EE',
  'et-EE': 'et-EE',
  hu: 'hu-HU',
  'hu-HU': 'hu-HU',
  no: 'no-NO',
  'no-NO': 'no-NO',
  sv: 'sv-SE',
  'sv-SE': 'sv-SE',
  eo: 'eo-UY',
  'eo-UY': 'eo-UY',
  vi: 'vi-VN',
  'vi-VN': 'vi-VN',
  ko: 'ko-KR',
  'ko-KR': 'ko-KR',
  zh: 'zh-TW',
  'zh-TW': 'zh-TW',
  ar: 'ar-SA',
  'ar-SA': 'ar-SA',
}

const normalizeLocale = (locale: string): PackageLocale => {
  if (!locale) return 'en'

  const localeCode = locale.replace('_', '-')
  return localeMap[localeCode] || 'en'
}

const messageImporters: Record<
  IsolatedIntlNamespace,
  Record<PackageLocale, JsonImporter>
> = {
  comparisons: {
    en: () => import('./en/comparisons.json'),
    'cs-CZ': () => import('./cs-CZ/comparisons.json'),
    'sk-SK': () => import('./sk-SK/comparisons.json'),
    'es-ES': () => import('./es-ES/comparisons.json'),
    'de-DE': () => import('./de-DE/comparisons.json'),
    'ja-JP': () => import('./ja-JP/comparisons.json'),
    'pl-PL': () => import('./pl-PL/comparisons.json'),
    'fr-FR': () => import('./fr-FR/comparisons.json'),
    'pt-PT': () => import('./pt-PT/comparisons.json'),
    'ru-RU': () => import('./ru-RU/comparisons.json'),
    'id-ID': () => import('./id-ID/comparisons.json'),
    'uk-UA': () => import('./uk-UA/comparisons.json'),
    'nl-NL': () => import('./nl-NL/comparisons.json'),
    'it-IT': () => import('./it-IT/comparisons.json'),
    'fi-FI': () => import('./fi-FI/comparisons.json'),
    'et-EE': () => import('./et-EE/comparisons.json'),
    'hu-HU': () => import('./hu-HU/comparisons.json'),
    'no-NO': () => import('./no-NO/comparisons.json'),
    'sv-SE': () => import('./sv-SE/comparisons.json'),
    'eo-UY': () => import('./eo-UY/comparisons.json'),
    'vi-VN': () => import('./vi-VN/comparisons.json'),
    'ko-KR': () => import('./ko-KR/comparisons.json'),
    'zh-TW': () => import('./zh-TW/comparisons.json'),
    'ar-SA': () => import('./en/comparisons.json'),
  },
  faq: {
    en: () => import('./en/faq.json'),
    'cs-CZ': () => import('./cs-CZ/faq.json'),
    'sk-SK': () => import('./sk-SK/faq.json'),
    'es-ES': () => import('./es-ES/faq.json'),
    'de-DE': () => import('./de-DE/faq.json'),
    'ja-JP': () => import('./ja-JP/faq.json'),
    'pl-PL': () => import('./pl-PL/faq.json'),
    'fr-FR': () => import('./fr-FR/faq.json'),
    'pt-PT': () => import('./pt-PT/faq.json'),
    'ru-RU': () => import('./ru-RU/faq.json'),
    'id-ID': () => import('./id-ID/faq.json'),
    'uk-UA': () => import('./uk-UA/faq.json'),
    'nl-NL': () => import('./nl-NL/faq.json'),
    'it-IT': () => import('./it-IT/faq.json'),
    'fi-FI': () => import('./fi-FI/faq.json'),
    'et-EE': () => import('./et-EE/faq.json'),
    'hu-HU': () => import('./hu-HU/faq.json'),
    'no-NO': () => import('./no-NO/faq.json'),
    'sv-SE': () => import('./sv-SE/faq.json'),
    'eo-UY': () => import('./eo-UY/faq.json'),
    'vi-VN': () => import('./vi-VN/faq.json'),
    'ko-KR': () => import('./ko-KR/faq.json'),
    'zh-TW': () => import('./zh-TW/faq.json'),
    'ar-SA': () => import('./en/faq.json'),
  },
  signup: {
    en: () => import('./en/signup.json'),
    'cs-CZ': () => import('./cs-CZ/signup.json'),
    'sk-SK': () => import('./sk-SK/signup.json'),
    'es-ES': () => import('./es-ES/signup.json'),
    'de-DE': () => import('./de-DE/signup.json'),
    'ja-JP': () => import('./ja-JP/signup.json'),
    'pl-PL': () => import('./pl-PL/signup.json'),
    'fr-FR': () => import('./fr-FR/signup.json'),
    'pt-PT': () => import('./pt-PT/signup.json'),
    'ru-RU': () => import('./ru-RU/signup.json'),
    'id-ID': () => import('./id-ID/signup.json'),
    'uk-UA': () => import('./uk-UA/signup.json'),
    'nl-NL': () => import('./nl-NL/signup.json'),
    'it-IT': () => import('./it-IT/signup.json'),
    'fi-FI': () => import('./fi-FI/signup.json'),
    'et-EE': () => import('./et-EE/signup.json'),
    'hu-HU': () => import('./hu-HU/signup.json'),
    'no-NO': () => import('./no-NO/signup.json'),
    'sv-SE': () => import('./sv-SE/signup.json'),
    'eo-UY': () => import('./eo-UY/signup.json'),
    'vi-VN': () => import('./vi-VN/signup.json'),
    'ko-KR': () => import('./ko-KR/signup.json'),
    'zh-TW': () => import('./zh-TW/signup.json'),
    'ar-SA': () => import('./en/signup.json'),
  },
  the_way: {
    en: () => import('./en/the_way.json'),
    'cs-CZ': () => import('./cs-CZ/the_way.json'),
    'sk-SK': () => import('./sk-SK/the_way.json'),
    'es-ES': () => import('./es-ES/the_way.json'),
    'de-DE': () => import('./de-DE/the_way.json'),
    'ja-JP': () => import('./ja-JP/the_way.json'),
    'pl-PL': () => import('./pl-PL/the_way.json'),
    'fr-FR': () => import('./fr-FR/the_way.json'),
    'pt-PT': () => import('./pt-PT/the_way.json'),
    'ru-RU': () => import('./ru-RU/the_way.json'),
    'id-ID': () => import('./id-ID/the_way.json'),
    'uk-UA': () => import('./uk-UA/the_way.json'),
    'nl-NL': () => import('./nl-NL/the_way.json'),
    'it-IT': () => import('./it-IT/the_way.json'),
    'fi-FI': () => import('./fi-FI/the_way.json'),
    'et-EE': () => import('./et-EE/the_way.json'),
    'hu-HU': () => import('./hu-HU/the_way.json'),
    'no-NO': () => import('./no-NO/the_way.json'),
    'sv-SE': () => import('./sv-SE/the_way.json'),
    'eo-UY': () => import('./eo-UY/the_way.json'),
    'vi-VN': () => import('./vi-VN/the_way.json'),
    'ko-KR': () => import('./ko-KR/the_way.json'),
    'zh-TW': () => import('./zh-TW/the_way.json'),
    'ar-SA': () => import('./en/the_way.json'),
  },
  cookieconsent: {
    en: () => import('./en/cookieconsent.json'),
    'cs-CZ': () => import('./cs-CZ/cookieconsent.json'),
    'sk-SK': () => import('./sk-SK/cookieconsent.json'),
    'es-ES': () => import('./es-ES/cookieconsent.json'),
    'de-DE': () => import('./de-DE/cookieconsent.json'),
    'ja-JP': () => import('./ja-JP/cookieconsent.json'),
    'pl-PL': () => import('./pl-PL/cookieconsent.json'),
    'fr-FR': () => import('./fr-FR/cookieconsent.json'),
    'pt-PT': () => import('./pt-PT/cookieconsent.json'),
    'ru-RU': () => import('./ru-RU/cookieconsent.json'),
    'id-ID': () => import('./en/cookieconsent.json'),
    'uk-UA': () => import('./uk-UA/cookieconsent.json'),
    'nl-NL': () => import('./nl-NL/cookieconsent.json'),
    'it-IT': () => import('./it-IT/cookieconsent.json'),
    'fi-FI': () => import('./en/cookieconsent.json'),
    'et-EE': () => import('./en/cookieconsent.json'),
    'hu-HU': () => import('./en/cookieconsent.json'),
    'no-NO': () => import('./en/cookieconsent.json'),
    'sv-SE': () => import('./en/cookieconsent.json'),
    'eo-UY': () => import('./en/cookieconsent.json'),
    'vi-VN': () => import('./en/cookieconsent.json'),
    'ko-KR': () => import('./ko-KR/cookieconsent.json'),
    'zh-TW': () => import('./zh-TW/cookieconsent.json'),
    'ar-SA': () => import('./ar-SA/cookieconsent.json'),
  },
  tours: {
    en: () => import('./en/tours.json'),
    'cs-CZ': () => import('./cs-CZ/tours.json'),
    'sk-SK': () => import('./sk-SK/tours.json'),
    'es-ES': () => import('./es-ES/tours.json'),
    'de-DE': () => import('./de-DE/tours.json'),
    'ja-JP': () => import('./ja-JP/tours.json'),
    'pl-PL': () => import('./pl-PL/tours.json'),
    'fr-FR': () => import('./fr-FR/tours.json'),
    'pt-PT': () => import('./pt-PT/tours.json'),
    'ru-RU': () => import('./ru-RU/tours.json'),
    'id-ID': () => import('./id-ID/tours.json'),
    'uk-UA': () => import('./uk-UA/tours.json'),
    'nl-NL': () => import('./nl-NL/tours.json'),
    'it-IT': () => import('./it-IT/tours.json'),
    'fi-FI': () => import('./fi-FI/tours.json'),
    'et-EE': () => import('./et-EE/tours.json'),
    'hu-HU': () => import('./hu-HU/tours.json'),
    'no-NO': () => import('./no-NO/tours.json'),
    'sv-SE': () => import('./sv-SE/tours.json'),
    'eo-UY': () => import('./eo-UY/tours.json'),
    'vi-VN': () => import('./vi-VN/tours.json'),
    'ko-KR': () => import('./ko-KR/tours.json'),
    'zh-TW': () => import('./zh-TW/tours.json'),
    'ar-SA': () => import('./en/tours.json'),
  },
}

const unwrapJsonModule = (jsonModule: JsonModule): IntlMessages => {
  if (jsonModule?.default) {
    return jsonModule.default
  }

  return jsonModule
}

export const loadIsolatedIntlMessages = async (
  namespace: IsolatedIntlNamespace,
  locale: string,
): Promise<IntlMessages> => {
  const normalizedLocale = normalizeLocale(locale)
  const localeLoaders = messageImporters[namespace]
  const loadMessages = localeLoaders[normalizedLocale] || localeLoaders.en
  const jsonModule = await loadMessages()

  return unwrapJsonModule(jsonModule)
}

export const loadComparisonsMessages = (locale: string) => {
  return loadIsolatedIntlMessages('comparisons', locale)
}

export const loadFaqMessages = (locale: string) => {
  return loadIsolatedIntlMessages('faq', locale)
}

export const loadSignupMessages = (locale: string) => {
  return loadIsolatedIntlMessages('signup', locale)
}

export const loadTheWayMessages = (locale: string) => {
  return loadIsolatedIntlMessages('the_way', locale)
}

export const loadCookieConsentMessages = (locale: string) => {
  return loadIsolatedIntlMessages('cookieconsent', locale)
}

export const loadToursMessages = (locale: string) => {
  return loadIsolatedIntlMessages('tours', locale)
}
