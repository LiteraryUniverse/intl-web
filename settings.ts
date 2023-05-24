export type LanguageSettingsType = {
  code: string
  name: string
  native: string
  defaultLocale: string
  supportedLocales: string[]
  rtl: boolean
}

export default {
  supportedLocales: ['en', 'cs'],
  /**
   * Languages supported in our app
   */
  languages: [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      defaultLocale: 'en-US',
      supportedLocales: ['en-US', 'en-UK', 'en-CA', 'en-AU', 'en-NZ'],
      rtl: false
    },
    {
      code: 'cs',
      name: 'Czech',
      native: 'Česky',
      defaultLocale: 'cs-CZ',
      supportedLocales: ['cs-CZ'],
      rtl: false
    },
    {
      code: 'ja',
      name: 'Japanese',
      native: '日本語',
      defaultLocale: 'ja-JP',
      supportedLocales: ['ja-JP'],
      rtl: false
    },
    {
      code: 'sk',
      name: 'Slovakian',
      native: 'Slovenčina',
      defaultLocale: 'sk-SK',
      supportedLocales: ['sk-SK'],
      rtl: false
    },
    {
      code: 'de',
      name: 'German',
      native: 'Deutsch',
      defaultLocale: 'de-GE',
      supportedLocales: [
        'de-GE',
        'de-BE',
        'de-AT',
        'de-CH',
        'de-IT',
        'de-LI',
        'de-LU'
      ],
      rtl: false
    },
    {
      code: 'es',
      name: 'Spanish',
      native: 'Español',
      defaultLocale: 'es-ES',
      supportedLocales: [
        'es-ES',
        'es-AR',
        'es-BO',
        'es-BR',
        'es-BZ',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-CU',
        'es-DO',
        'es-EA',
        'es-EC',
        'ES-GQ',
        'es-GT',
        'es-HN',
        'es-IC',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PH',
        'es-PR',
        'es-PY',
        'es-SV',
        'es-US',
        'es-UY',
        'es-VE'
      ],
      rtl: false
    },
    {
      code: 'pl',
      name: 'Polish',
      native: 'Polski',
      defaultLocale: 'pl-PL',
      supportedLocales: ['pl-PL'],
      rtl: false
    },
    {
      code: 'fr',
      name: 'French',
      native: 'Français',
      defaultLocale: 'fr-FR',
      supportedLocales: [
        'fr-FR',
        'fr-CA',
        'fr-CH',
        'fr-LU',
        'fr-BE',
        'fr-MC',
        'fr-CF'
      ],
      rtl: false
    },
    {
      code: 'pt-PT',
      name: 'Portuguese (Portugal)',
      native: 'Português',
      defaultLocale: 'pt-PT',
      supportedLocales: [
        'pt',
        'pt-PT',
        'pt-AO',
        'pt-CH',
        'pt-CV',
        'pt-GQ',
        'pt-GW',
        'pt-LU',
        'pt-MO',
        'pt-MZ',
        'pt-ST',
        'pt-TL'
      ],
      rtl: false
    },
    {
      code: 'ru',
      name: 'Russian',
      native: 'русский',
      defaultLocale: 'ru-RU',
      supportedLocales: [
        'ru-RU',
        'ru-BY',
        'ru-KG',
        'ru-KZ',
        'ru-MD',
        'ru-UA'
      ],
      rtl: false
    },
  ],
  /**
   * Get the array of language codes of supported languages
   * @returns {[String]}
   */
  supportedLanguages (): string[] {
    return this.languages.map((lang) => lang.code) || []
  },
  allSupportedLocales (): string[] {
    const supported = []
    this.languages.forEach((lang) =>
      lang.supportedLocales.forEach((locale) => supported.push(locale))
    )
    return supported
  },
  supportedLocalesForLanguage (languageCode: string): string[] {
    const langDetails = this.languages.find(
      (lang) => lang.code === languageCode
    )
    return [langDetails.code, ...langDetails.supportedLocales]
  },
  findLanguageCodeByLocale (locale: string): string {
    if (locale.length === 2 && this.supportedLanguages().includes(locale)) {
      return locale
    }
    if (locale.length === 5) {
      // Go by supported locales
      const language = this.languages.find((lang) =>
        lang.supportedLocales.includes(locale)
      )
      if (language) return language.code
    }
    return 'en'
  },
  /**
   * Returns details of all supported languages for stories.
   * This includes stories supported through the app in addition to those listed here.
   * @returns {({defaultLocale: string, code: string, supportedLocales: [string, string, string, string, string], native: string, name: string, rtl: boolean}|{defaultLocale: string, code: string, supportedLocales: [string], native: string, name: string, rtl: boolean}|{defaultLocale: string, code: string, supportedLocales: [string], native: string, name: string, rtl: boolean})[]}
   */
  storyLanguages (): LanguageSettingsType[] {
    return [
      ...this.languages,
      {
        code: 'pt-BR',
        name: 'Portuguese (Brazil)',
        native: 'português brasileiro',
        defaultLocale: 'pt-BR',
        supportedLocales: ['pt-BR'],
        rtl: false
      },
      {
        code: 'ko',
        name: 'Korean',
        native: '한국어',
        defaultLocale: 'ko-KR',
        supportedLocales: ['ko-KR'],
        rtl: false
      },
      {
        code: 'hi',
        name: 'Hindi',
        native: 'मानक हिन्दी', // modern standard hindi
        defaultLocale: 'hi-IN',
        supportedLocales: ['hi-IN'],
        rtl: false
      },
      {
        code: 'it',
        name: 'Italian',
        native: 'Italiano',
        defaultLocale: 'it-IT',
        supportedLocales: ['it-IT', 'it-CH'],
        rtl: false
      },
      {
        code: 'nl',
        name: 'Dutch',
        native: 'Nederlands',
        defaultLocale: 'nl-NL',
        supportedLocales: [
          'nl-NL',
          'nl-AW',
          'nl-BE',
          'nl-BQ',
          'nl-CW',
          'nl-SX',
          'nl-SR'
        ],
        rtl: false
      },
      {
        code: 'fi',
        name: 'Finnish',
        native: 'Suomi',
        defaultLocale: 'fi-FI',
        supportedLocales: ['fi-FI'],
        rtl: false
      },
      {
        code: 'af',
        name: 'Afrikaans',
        native: 'Afrikaans',
        defaultLocale: 'af-ZA',
        supportedLocales: ['af-ZA', 'af-NA'],
        rtl: false
      },
      {
        code: 'ca',
        name: 'Catalan',
        native: 'Català',
        defaultLocale: 'ca-ES',
        supportedLocales: ['ca-ES', 'ca-AD', 'ca-FR', 'ca-IT'],
        rtl: false
      },
      {
        code: 'da',
        name: 'Danish',
        native: 'Dansk',
        defaultLocale: 'da-DK',
        supportedLocales: ['da-DK', 'da-GL'],
        rtl: false
      },
      {
        code: 'et',
        name: 'Estonian',
        native: 'eesti keel',
        defaultLocale: 'et-EE',
        supportedLocales: ['et-EE'],
        rtl: false
      },
      {
        code: 'fil',
        name: 'Filipino',
        native: 'Tagalog',
        defaultLocale: 'fil-PH',
        supportedLocales: ['fil-PH'],
        rtl: false
      },
      {
        code: 'el',
        name: 'Greek',
        native: 'Ελληνικά',
        defaultLocale: 'el-GR',
        supportedLocales: ['el-CY', 'el-GR'],
        rtl: false
      },
      {
        code: 'hu',
        name: 'Hungarian',
        native: 'Magyar',
        defaultLocale: 'hu-HU',
        supportedLocales: ['hu-HU'],
        rtl: false
      },
      {
        code: 'ga',
        name: 'Irish',
        native: 'Gaeilge',
        defaultLocale: 'ga-IE',
        supportedLocales: ['ga-IE'],
        rtl: false
      },
      {
        code: 'jbo',
        name: 'Lojban',
        native: 'Lojban',
        defaultLocale: 'jbo-EN',
        supportedLocales: ['jbo-EN'],
        rtl: false
      },
      {
        code: 'no',
        name: 'Norwegian',
        native: 'Norsk',
        defaultLocale: 'no-NO',
        supportedLocales: ['no-NO'],
        rtl: false
      },
      {
        code: 'ro',
        name: 'Romanian',
        native: 'Română',
        defaultLocale: 'ro-RO',
        supportedLocales: ['ro-RO', 'ro-MD'],
        rtl: false
      },
      {
        code: 'sv',
        name: 'Swedish',
        native: 'Svenska',
        defaultLocale: 'sv-SE',
        supportedLocales: ['sv-SE', 'sv-FI', 'sv-AX'],
        rtl: false
      },
      {
        code: 'th',
        name: 'Thai',
        native: 'ภาษาไทย',
        defaultLocale: 'th-TH',
        supportedLocales: ['th-TH'],
        rtl: false
      },
      {
        code: 'tr',
        name: 'Turkish',
        native: 'Türkçe',
        defaultLocale: 'tr-TR',
        supportedLocales: ['tr-TR', 'tr-CY'],
        rtl: false
      },
      {
        code: 'uk',
        name: 'Ukrainian',
        native: 'украї́нська',
        defaultLocale: 'uk-UA',
        supportedLocales: ['uk-UA'],
        rtl: false
      },
      {
        code: 'vi',
        name: 'Vietnamese',
        native: 'Tiếng Việt',
        defaultLocale: 'vi-VN',
        supportedLocales: ['vi-VN'],
        rtl: false
      },
      {
        code: 'id',
        name: 'Indonesian',
        native: 'Bahasa Indonesia',
        defaultLocale: 'id-ID',
        supportedLocales: ['id-ID'],
        rtl: false
      },
      {
        code: 'la',
        name: 'Latin',
        native: 'lingua Latīna',
        defaultLocale: 'la-EU',
        supportedLocales: ['la-EU', 'la-HU', 'la-HR', 'la-PL'],
        rtl: false
      },
      {
        code: 'eo',
        name: 'Esperanto',
        native: 'Lingvo Internacia',
        defaultLocale: 'eo-UN',
        supportedLocales: ['eo-UN', 'eo-US', 'eo-HU', 'eo-CN', 'eo-VA', 'eo-HR', 'eo-DE', 'eo-NZ', 'eo-UY'],
        rtl: false
      },
    ]
  },
  storyLocales (): string[] {
    return this.storyLanguages().map((lang) => lang.code)
  },
  /**
   * Definition of currencies for intl
   */
  currencies: {
    USD: {
      sign: '$',
      location: 'before'
    },
    EUR: {
      sign: '€',
      location: 'after'
    },
    GBP: {
      sign: '$',
      location: 'before'
    },
    JPY: {
      sign: '￥',
      location: 'before'
    },
    CZK: {
      sign: 'Kč',
      location: 'after'
    }
  },
  intlCurrencyFormats: {
    // format for MessageFormat
    number: {
      jpy: { style: 'currency', currency: 'JPY' },
      gbp: { style: 'currency', currency: 'GBP' },
      eur: { style: 'currency', currency: 'EUR' },
      usd: { style: 'currency', currency: 'USD' },
      czk: { style: 'currency', currency: 'CZK' }
    }
  },
  /**
   * Returns the preferred currency based on country.
   * @param countryCode {String} 2-key country string
   * @returns {String} 3-key currency string
   */
  currencyByCountry (countryCode: string): string {
    if (!countryCode) return 'EUR'
    const code = countryCode.toUpperCase()
    switch (code) {
      case 'GB':
        return 'GBP'
      case 'US':
      case 'CA':
        return 'USD'
      case 'CZ':
        return 'CZK'
      case 'JP':
        return 'JPY'
    }
    // EU check
    if (
      this.euCountries.indexOf(code) >= 0 ||
      this.euAssociated.indexOf(code) >= 0
    )
      return 'EUR'
    return 'EUR'
  },
  /**
   * 2-key list of all countries
   */
  countries: [
    'AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AN',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BH',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',
    'JO',
    'KZ',
    'KE',
    'KI',
    'KR',
    'KW',
    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'OM',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'QA',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SA',
    'SN',
    'RS',
    'SC',
    'SL',
    'SG',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'AE',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW'
  ],
  /**
   * 2-key list of EU countries
   */
  euCountries: [
    'BE',
    'BG',
    'CZ',
    'DK',
    'DE',
    'EE',
    'IE',
    'EL',
    'ES',
    'FR',
    'HR',
    'IT',
    'CY',
    'LV',
    'LT',
    'LU',
    'HU',
    'MT',
    'NL',
    'AT',
    'PL',
    'PT',
    'RO',
    'SI',
    'SK',
    'FI',
    'SE'
  ],
  /**
   * List of associated countries with EU for which to display EUR
   * https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Country_codes
   */
  euAssociated: [
    // EFTA
    'IS',
    'NO',
    'LI',
    'CH',
    // Candidates
    'ME',
    'MK',
    'AL',
    'RS',
    'TR',
    // Potential candidates
    'XK',
    'BA',
    // ENP - East
    'AM',
    'AZ',
    'BY',
    'MD',
    'GE',
    'UA',
    // ENP -South
    'DZ',
    'EG',
    'IL',
    'JO',
    'LB',
    'LY',
    'MA',
    'PS',
    'SY',
    'TN',
    // Other
    'UK',
    'RU'
  ],
  /**
   * USA states
   * Using ISO https://en.wikipedia.org/wiki/ISO_3166-2:US
   */
  usStates: [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
    // non-states
    'DC',
    'AS',
    'GU',
    'MP',
    'PR',
    'UM',
    'VI'
  ]
}
