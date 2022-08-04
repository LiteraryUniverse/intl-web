/* global Package */
Package.describe({
  name: 'lu-intl',
  version: '1.12.3',
  summary: 'Intl for Literary Universe',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('2.6')
  api.use('ecmascript')
  api.mainModule('./index.js', ['client', 'server'], { lazy: true })
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('lu-intl')
})
