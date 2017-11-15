import { moduleForModel, test } from 'ember-qunit';

moduleForModel('github-repo', 'Unit | Model | github repo', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const githubRepo = this.store().modelFor('github-repo');
  // let store = this.store();
  assert.ok(!!githubRepo);
});
