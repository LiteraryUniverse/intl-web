/* global Package */
Package.describe({
  name: 'lu-intl',
  version: '2.14.0',
  summary: 'Intl for Literary Universe',
  documentation: 'README.md',
})

Package.onUse(function (api) {
  api.versionsFrom(['2.8.1', '3.0'])
  api.use(['ecmascript', 'typescript', 'zodern:types'])
  api.mainModule('./index.ts', ['client', 'server'], { lazy: true })
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'typescript'])
  api.use('tinytest')
  api.use('lu-intl')
})
