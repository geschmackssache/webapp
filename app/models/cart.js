import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  cart_items: DS.hasMany('cart-item'),
  finished: DS.attr('boolean'),
});
