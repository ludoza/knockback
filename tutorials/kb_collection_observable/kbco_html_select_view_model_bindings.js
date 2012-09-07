// Generated by CoffeeScript 1.3.3
var people, selected_people, view_model;

people = new Backbone.Collection([
  {
    name: 'Bob'
  }, {
    name: 'Sarah'
  }, {
    name: 'George'
  }
]);

selected_people = new Backbone.Collection();

view_model = {
  people: kb.collectionObservable(people),
  selected_people: kb.collectionObservable(selected_people)
};

ko.applyBindings(view_model, $('#kbco_html_select')[0]);
