import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', function() {
    this.route('search', function() {
      this.route('results');
    });
  });
});

export default Router;
