import Controller from '@ember/controller';

export default class BoardPlayController extends Controller {
  queryParams = ['xPlayer', 'oPlayer'];

  xPlayer = null;
  oPlayer = null;
}
