import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.attr("string"),
  dance: DS.attr("string"),
  location: DS.attr("string"),
  completed: DS.attr("boolean"),
  robot: DS.belongsTo("robot")
});
