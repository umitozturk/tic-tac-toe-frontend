import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BoardSelectionComponent extends Component {
  @service store;

  @tracked xPlayerID = '';
  @tracked oPlayerID = '';

  // TODO: Find a better way to collect player data
  players = this.store.findAll('player');

  @action
  xPlayerUpdate(event) {
    this.xPlayerID = event.target.value;

    if(this.oPlayerID == this.xPlayerID) {
      this._warnIdenticalSelection();
    }
  }

  @action
  oPlayerUpdate(event) {
    this.oPlayerID = event.target.value;
    
    if(this.oPlayerID == this.xPlayerID) {
      this._warnIdenticalSelection();
    }
  }

  _warnIdenticalSelection() {
    alert('Players must be different');
  }
}
