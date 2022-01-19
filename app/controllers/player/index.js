import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';


export default class PlayerIndexController extends Controller {
  @service router;

  @alias('model')
  players;

  @action
  homePage() {
    this.router.transitionTo('/');
  }

  @action
  newPlayerPage() {
    this.router.transitionTo('/player/new');
  }
}
