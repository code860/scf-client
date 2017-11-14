import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(resolvedModel, transition) {
    if(transition.targetName === 'main.index') {
      this.transitionTo('main.search');
    }
  },
});
