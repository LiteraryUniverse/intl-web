/* global Package */
Package.describe({
  name: 'lu-intl',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Intl for Literary Universe',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Meteor-Community-Packages/template-package',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.9')
  api.use('ecmascript')
  api.mainModule('./index.js', ['client', 'server'], { lazy: true })
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('lu-intl')
})
