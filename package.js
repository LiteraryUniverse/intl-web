/* global Package */
Package.describe({
  name: 'lu-intl',
  version: '2.4.1',
  summary: 'Intl for Literary Universe',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('2.6')
  api.use(['ecmascript', 'typescript'])
  api.mainModule('./index.ts', ['client', 'server'], { lazy: true })
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'typescript'])
  api.use('tinytest')
  api.use('lu-intl')
})
