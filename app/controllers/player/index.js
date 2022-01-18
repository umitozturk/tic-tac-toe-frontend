import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class PlayerIndexController extends Controller {
  @service router;

  @action
  homePage() {
    this.router.transitionTo('/');
  }

  @action
  newPlayerPage() {
    this.router.transitionTo('/player/new');
  }
}
