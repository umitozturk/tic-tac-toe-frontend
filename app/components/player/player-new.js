import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlayerNewComponent extends Component {
  @service store;
  @service router;

  playerName = '';

  @action
  async registerPlayer() {
    this.error = [];
    let player = this.store.createRecord('player', {
      name: this.playerName,
    });
    try {
      await player.save();
      this.playerIndexPage();
    } catch (e) {
      this.store.unloadRecord(player);
      this.error = e.errors;
    }
  }

  @action
  playerIndexPage() {
    this.router.transitionTo('/player');
  }
}
