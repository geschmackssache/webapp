import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string'),
  content: DS.belongsTo('content')
});
