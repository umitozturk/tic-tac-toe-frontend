import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class BoardController extends Controller {
  @alias('model')
  players;
}
