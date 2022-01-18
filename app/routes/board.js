import Route from '@ember/routing/route';

export default class BoardRoute extends Route {
  model() {
    return this.store.findAll('player');
  }
}
