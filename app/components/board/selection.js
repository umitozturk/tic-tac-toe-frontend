import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BoardSelectionComponent extends Component {
  @service store;

  @tracked xPlayer = '';
  @tracked oPlayer = '';

  // TODO: Find a better way to collect player data
  players = this.store.findAll('player');

  @action
  xPlayerUpdate(selected) {
    this.xPlayer = selected.target.value;

    if(this.oPlayer == this.xPlayer) {
      this._warnIdenticalSelection();
    }
  }

  @action
  oPlayerUpdate(selected) {
    this.oPlayer = selected.target.value;
    
    if(this.oPlayer == this.xPlayer) {
      this._warnIdenticalSelection();
    }
  }



  _warnIdenticalSelection() {
    alert('Players must be different');
  }
}
