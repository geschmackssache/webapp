import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('startscreen', '10245');
  }
});
