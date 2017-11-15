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
    if(userName && repoName){
      return Ember.RSVP.hash({
        events: this.store.query('github-event', {username: userName, repo: repoName})
      }).catch(function(adapterError){
        return {errorMsg: adapterError.errors};
      });
    }else{
      return {};
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('errorMsg', model.errorMsg)
    controller.set("filteredEventsList", model.events);
  }
});
