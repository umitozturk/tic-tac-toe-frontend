import Component from '@glimmer/component';
import { arg, forbidExtraArgs } from 'ember-arg-types';
import { object } from 'prop-types';

@forbidExtraArgs
export default class PlayerPlayerListComponent extends Component {
  @arg(object)
  players;
}
