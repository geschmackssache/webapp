import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('startscreen', '10245');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('cart').set('model', model.get('user').get('cart'));
  },
  renderTemplate: function() {
    this._super();
    this.render('cart', {
      into: 'index',
      outlet: 'cart',
      controller: this.controllerFor('cart')
    });
  }
});
