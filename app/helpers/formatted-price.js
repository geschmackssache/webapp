import Ember from 'ember';

export function formattedPrice(price) {
  debugger
  var formatted = parseFloat(price).toFixed(2) / 100;
  return (Ember.isEmpty(price) || isNaN(formatted)) ? '' : formatted + ' €';
}

export default Ember.HTMLBars.makeBoundHelper(formattedPrice);
