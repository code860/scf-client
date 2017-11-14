import DS from 'ember-data';

export default DS.Model.extend({
  //attributes
  eventType: DS.attr('string', {readOnly: true}),
  createdAt: DS.attr('date', { readOnly: true }),
  publicEvent: DS.attr('boolean', {readOnly: true})
  //relationships
  //Not including the relationships for now
  // githubUser: DS.belongsTo('github-user', {readOnly: true}),
  // githubRepo: DS.belongsTo('github-repo', {readOnly: true})
});
