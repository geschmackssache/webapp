import Ember from 'ember';

export default Ember.ObjectController.extend({
  cartItemsQuantity: Ember.computed.mapBy('cartItems', 'quantity'),
  quantityTotal: Ember.computed.sum("cartItemsQuantity"),

  cartItemsPrice: Ember.computed.map('cartItems', function(cartItem) {
    return cartItem.get('product').get('price');
  }),

  priceTotal: Ember.computed.sum("cartItemsPrice")
});
