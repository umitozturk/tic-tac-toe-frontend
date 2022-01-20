import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BoardPlayController extends Controller {
  queryParams = ['xPlayerID', 'oPlayerID'];

  @tracked xPlayer = '';
  @tracked oPlayer = '';

  xPlayerID = '';
  oPlayerID = '';
}
