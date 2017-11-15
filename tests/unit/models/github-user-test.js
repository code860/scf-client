import { moduleForModel, test } from 'ember-qunit';

moduleForModel('github-user', 'Unit | Model | github user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const githubUser = this.store().modelFor('github-user');
  // let store = this.store();
  assert.ok(!!githubUser);
});
