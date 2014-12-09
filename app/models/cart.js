import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  cartItems: DS.hasMany('cart-item'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  street: DS.attr('string'),
  zip: DS.attr('number'),
  city: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  finished: DS.attr('boolean')
});
