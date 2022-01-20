import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GamePlayRoute extends Route {
  @service store;

  queryParams = {
    xPlayerID: {
      refreshModel: true
    },
    oPlayerID: {
      refreshModel: true
    }
  };

  async model(params) {
    this.store.findAll('player');

    let [xPlayer, oPlayer] = await Promise.all([ 
      this.xPlayer = this.store.findRecord('player', params.xPlayerID),
      this.oPlayer = this.store.findRecord('player', params.oPlayerID),
    ]);

    return { xPlayer, oPlayer };
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.set('xPlayer', this.xPlayer);
    controller.set('oPlayer', this.oPlayer);
  }
}
