import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BoardPlayController extends Controller {
  queryParams = ['xPlayerID', 'oPlayerID'];

  @tracked xPlayer = '22';
  @tracked oPlayer = '22';

  xPlayerID = '';
  oPlayerID = '';
}
