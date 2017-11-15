import { moduleForModel, test, skip } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';

moduleForModel('github-event', 'Unit | Model | github event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  const githubEvent = this.subject();
  // let store = this.store();
  assert.ok(!!githubEvent);
});

test('eventType is a read only string attribute', function(assert) {
  runAttrTest.call(this, assert, 'github-event', 'eventType', 'string', true, 'test');
});

test('userName is a read only string attribute', function(assert) {
  runAttrTest.call(this, assert, 'github-event', 'userName', 'string', true, 'test');
});

test('userAvatar is a read only string attribute', function(assert) {
  runAttrTest.call(this, assert, 'github-event', 'userAvatar', 'string', true, 'test');
});

test('repoName is a read only string attribute', function(assert) {
  runAttrTest.call(this, assert, 'github-event', 'repoName', 'string', true, 'test');
});

skip('createdAt is a read only date attribute', function(assert) {
  //need to tweak the attributes test helper when i get a chance
  runAttrTest.call(this, assert, 'github-event', 'canBePrinted', 'date', true, new Date());
});

test('publicEvent is a read only boolean attribute', function(assert) {
  runAttrTest.call(this, assert, 'github-event', 'publicEvent', 'boolean', true, true);
});

test("hasUserName shoud return false if no user name present", function(assert){
  let githubEvent = this.subject({userName: ""});
  assert.notOk(githubEvent.get('hasUserName'));
});

test('hasUserName should return true if userName is present', function(assert){
  let githubEvent = this.subject({userName: "code860"});
  //not sure why this is failing.......
  assert.Ok(githubEvent.get('hasUserName'));
});

test("userGithubLink should be available if userName is present", function(assert){
  let githubEvent = this.subject({userName: "code860"});
  assert.equal(githubEvent.get('userGithubLink'), "https://github.com/code860");
});
