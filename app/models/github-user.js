import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string', {readOnly: true}),
  avatarUrl: DS.attr('string', {readOnly: true})
});
