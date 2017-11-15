import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    gitUser: {
      refreshModel: true
    },
    gitRepo: {
      refreshModel: true
    }
  },
  model(params){
    let userName = params.gitUser,
        repoName = params.gitRepo;
    // We want both query paramters present before we call rails
    if(userName  && repoName){
      return Ember.RSVP.hash({
        events: this.store.query('github-event', {username: userName, repo: repoName})
      }).catch(function(adapterError){
        return {errorMsg: adapterError.errors};
      });
    }else{
      return {};
    }
  },
  afterModel(model){
    var _this = this;
    if(model.events){
      let eventTypes = [],
          uniqueEventTypes = [];
      model.events.forEach(function(evt){
        eventTypes.push(evt.get('eventType'));
      });
      uniqueEventTypes = eventTypes.filter(function(item, index){
        return eventTypes.indexOf(item) == index;
      });
      _this.set('eventTypes', uniqueEventTypes);
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('eventTypesList', this.get("eventTypes"));
    controller.set('errorMsg', model.errorMsg);
  }
});
