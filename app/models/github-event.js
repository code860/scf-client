import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  //attributes
  createdAt: DS.attr('date', { readOnly: true }),
  eventType: DS.attr('string', {readOnly: true}),

  publicEvent: DS.attr('boolean', {readOnly: true}),
  userName: DS.attr('string', {readOnly: true}),
  userAvatar: DS.attr('string', {readOnly: true}),
  repoName: DS.attr('string', {readOnly: true}),
  //computed properties
  hasUserName: Ember.computed('userName', function(){
    return this.get('userName') !== "";
  }),
  userGithubLink: Ember.computed('hasUserName', 'userName', function(){
     return this.get('hasUserName') ? `https://github.com/${this.get('userName')}` : null;
  })

  //relationships
  //Not including the relationships for now
  // githubUser: DS.belongsTo('github-user', {readOnly: true}),
  // githubRepo: DS.belongsTo('github-repo', {readOnly: true})
});
