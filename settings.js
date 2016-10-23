export default {
  supportedLocales: ['en', 'cs'],
  storyLocales: ['en', 'cs', 'de', 'es'],
  languages: [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      defaultLocale: 'en-US',
      supportedLocales: ['en-US'],
    },{
      code: 'cs',
      name: 'Czech',
      native: 'Česky',
      defaultLocale: 'cs-CZ',
      supportedLocales: ['cs-CZ'],
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
      },
      {
        code: 'es',
        name: 'Spanish',
        native: 'Espanol',
        defaultLocale: 'es-ES',
        supportedLocales: ['es-ES'],
      }
    ]);
  }
}