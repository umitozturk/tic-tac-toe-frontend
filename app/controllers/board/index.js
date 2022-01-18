import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class BoardIndexController extends Controller {
  @alias('model')
  players;
}
