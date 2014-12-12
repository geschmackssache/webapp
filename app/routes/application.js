import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('startscreen', '10245');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('cart').set('model', model.get('user').get('cart'));
    this.controllerFor('products').set('model', this.store.all('product'));
  },
  renderTemplate: function() {
    this._super();
    this.render('cart', {
      into: 'application',
      outlet: 'cart',
      controller: this.controllerFor('cart')
    });
    this.render('products', {
      into: 'application',
      outlet: 'products',
      controller: this.controllerFor('products')
    });
  }
});
