// Generated by CoffeeScript 1.3.3
var model, view_model;

model = new Backbone.Model({
  date: new Date()
});

view_model = {
  date: kb.observable(model, {
    key: 'date',
    localizer: LongDateLocalizer
  })
};
