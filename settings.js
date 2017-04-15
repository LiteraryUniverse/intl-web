export default {
  supportedLocales: [ 'en', 'cs' ],
  storyLocales: [ 'en', 'cs', 'de', 'es' ],
  languages: [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      defaultLocale: 'en-US',
      supportedLocales: [ 'en-US', 'en-UK', 'en-CA', 'en-AU', 'en-NZ' ],
      rtl: false,
    },{
      code: 'cs',
      name: 'Czech',
      native: 'Česky',
      defaultLocale: 'cs-CZ',
      supportedLocales: [ 'cs-CZ' ],
      rtl: false,
    }
  ],
  storyLanguages() {
    return this.languages.concat([
      {
        code: 'de',
        name: 'German',
        native: 'Deutsch',
        defaultLocale: 'de-GE',
        supportedLocales: [ 'de-GE' ],
        rtl: false,
      },
      {
        code: 'es',
        name: 'Spanish',
        native: 'Espanol',
        defaultLocale: 'es-ES',
        supportedLocales: [ 'es-ES' ],
        rtl: false,
      }
    ]);
  },
  currencies: {
    USD: {
      sign: '$',
      location: 'before',
      fromUSD: 1,
      // format for MessageFormat
      format: {
        number: {
          usd: { style: 'currency', currency: 'USD' }
        }
      },
    },
    CZK: {
      sign: 'Kč',
      location: 'after',
      fromUSD: 25,
      format: {
        number: {
          czk: { style: 'currency', currency: 'CZK' }
        }
      },
    }
  }
};
