try
  require.config({
    paths:
      'underscore': "../../../../vendor/underscore-1.5.2"
      'backbone': "../../../../vendor/backbone-1.1.0"
      'knockout': "../../../../vendor/knockout-3.0.0"
      'knockback': "../../../../knockback"
      'knockback-validation': "../../../../lib/validation"
      'knockback-statistics': "../../../../lib/statistics"
    shim:
      underscore:
        exports: '_'
      backbone:
        exports: 'Backbone'
        deps: ['underscore']
  })

  module_name = 'knockback-defaults'
  module_name = 'knockback' if (require.toUrl(module_name).split('./..').length is 1)

  # library and dependencies
  require ['underscore', 'backbone', 'knockout', module_name, 'knockback-statistics', 'mocha_test_runner'], (_, Backbone, ko, kb, kbs, runner) ->
    window._ = window.Backbone = window.ko = window.kb = null # force each test to require dependencies synchronously
    require ['../../../knockback/validation/build/test'], -> runner.start()