import Route from '@ember/routing/route';

export default class PlayerRoute extends Route {  
  model() {
    return this.store.findAll('player');
  }
}
