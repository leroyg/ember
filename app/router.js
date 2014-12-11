import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('robots');
  this.resource('robot', { path: 'robots/:id' });
});

export default Router;
