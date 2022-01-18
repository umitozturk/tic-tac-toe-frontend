import Component from '@glimmer/component';
import { array } from 'prop-types';
import { arg } from 'ember-arg-types';

export default class BoardSelectionComponent extends Component {
  xPlayer = '';
  yPlayer = '';

  @arg(array.isRequired)
  players;
}
