import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class GamePlayController extends Controller {
  queryParams = {
    xPlayerID: {
      refreshModel: true
    }
  }

  @tracked xPlayer = '';
  @tracked oPlayer = '';

  @tracked xPlayerID = '';
  @tracked oPlayerID = '';
}
