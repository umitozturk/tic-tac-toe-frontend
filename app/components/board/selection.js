import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BoardSelectionComponent extends Component {
  @service store;

  @tracked xPlayerID = '';
  @tracked oPlayerID = '';

  @tracked showInfo = false;
  @tracked buttonDisabled = true;

  players = this.store.findAll('player');

  @action
  xPlayerUpdate(event) {
    this.xPlayerID = event.target.value;

    if(this.oPlayerID == this.xPlayerID) {
      this.showInfo = true;
      this.buttonDisabled = true;
    } else if(this.oPlayerID != '' && this.xPlayerID != '') {
      this.buttonDisabled = false;
    }
  }

  @action
  oPlayerUpdate(event) {
    this.oPlayerID = event.target.value;
    
    if(this.oPlayerID == this.xPlayerID) {
      this.showInfo = true;
      this.buttonDisabled = true;
    } else if(this.oPlayerID != '' && this.xPlayerID != '') {
      this.buttonDisabled = false;
    }
  }

  @action
  closeInfo() {
    this.showInfo = false;
  }
}
