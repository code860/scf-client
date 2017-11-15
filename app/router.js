import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  baseURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('search', function() {});
  });
});

export default Router;
