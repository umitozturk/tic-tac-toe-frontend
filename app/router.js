import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('/', { path: '/index' });
  this.route('player', function() {
    this.route('new');
  });
  this.route('rank');
  this.route('game', function() {
    this.route('play');
  });
});
