import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {readOnly: true}),
  url: DS.attr('string', {readOnly: true})
});
