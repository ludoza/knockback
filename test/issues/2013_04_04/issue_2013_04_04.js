// Generated by CoffeeScript 1.6.2
(function() {
  var workspace, workspaceViewModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.SingleExecutionViewModel = kb.ViewModel.extend({
    constructor: function(model, options) {
      return kb.ViewModel.prototype.constructor.call(this, model, {}, options);
    }
  });

  window.SingleExecutionCollection = kb.CollectionObservable.extend({
    constructor: function(collection, options) {
      return kb.CollectionObservable.prototype.constructor.call(this, collection, {
        view_model: SingleExecutionViewModel,
        options: options
      });
    }
  });

  window.WorkspaceViewModel = kb.ViewModel.extend({
    constructor: function(model, options) {
      kb.ViewModel.prototype.constructor.call(this, model, {
        requires: ['singleExecutions'],
        factories: {
          'singleExecutions': SingleExecutionCollection
        }
      }, options);
      console.log("calling workspace view model");
    },
    init: function() {
      return this.subscribeEvents();
    },
    subscribeEvents: function() {
      var _this = this;

      return this.singleExecutions.subscribe(function(executionViewModels) {
        return alert(executionViewModels);
      });
    }
  });

  window.Workspace1 = (function(_super) {
    __extends(Workspace1, _super);

    Workspace1.prototype.defaults = {
      singleExecutions: new Backbone.Collection(),
      batchExecutions: new Backbone.Collection()
    };

    function Workspace1() {
      Workspace1.__super__.constructor.call(this);
    }

    return Workspace1;

  })(Backbone.Model);

  workspace = new Workspace1();

  workspaceViewModel = new WorkspaceViewModel(workspace);

  workspaceViewModel.init();

  workspace.get('singleExecutions').add(new Backbone.Model());

}).call(this);
