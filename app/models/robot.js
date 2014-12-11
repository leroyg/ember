import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  photo: DS.attr("string"),
  missions: DS.hasMany("mission", {async: true})
});
