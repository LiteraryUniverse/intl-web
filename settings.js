export default {
  supportedLocales: ['en', 'cs','cn'],
  storyLocales: ['en', 'cs', 'de', 'es','cn'],
  languages: [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      defaultLocale: 'en-US',
      supportedLocales: ['en-US'],
      rtl: false,
    },{
      code: 'cs',
      name: 'Czech',
      native: 'Česky',
      defaultLocale: 'cs-CZ',
      supportedLocales: ['cs-CZ'],
      rtl: false,
    },
    {
      code: 'cn',
      name: 'Chinese',
      native: '中文',
      defaultLocale: 'cn-CN',
      supportedLocales: ['cn-CN'],
      rtl: false,
    }
  ],
  storyLanguages: function() {
    return this.languages.concat([
      {
        code: 'de',
        name: 'German',
        native: 'Deutsch',
        defaultLocale: 'de-GE',
        supportedLocales: ['de-GE'],
        rtl: false,
      },
      {
        code: 'es',
        name: 'Spanish',
        native: 'Espanol',
        defaultLocale: 'es-ES',
        supportedLocales: ['es-ES'],
        rtl: false,
      }
    ]);
  }
}