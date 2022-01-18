import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | board/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:board/index');
    assert.ok(route);
  });
});
