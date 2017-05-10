import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('show', { path: '/:post_id' });
  });
  this.route('about');
  this.route('newpost');
});

export default Router;
