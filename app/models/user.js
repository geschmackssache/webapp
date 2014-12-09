import DS from 'ember-data';

export default DS.Model.extend({
  cart: DS.belongsTo('cart'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  street: DS.attr('string'),
  zip: DS.attr('number'),
  city: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});
