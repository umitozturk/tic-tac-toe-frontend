import Controller from '@ember/controller';

export default class BoardPlayController extends Controller {
  queryParams = ['xPlayerID', 'oPlayerID'];

  xPlayer = '';
  oPlayer = '';

  xPlayerID = ''
  oPlayerID = ''
}
