import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['gitUser', "gitRepo"],
  sortProperties: ['createdAt:asc'],
  eventTypeList: null,
  userNameQuery: null,
  repoNameQuery: null,
  actions: {
    search(){
      this.set('gitUser', this.get('userNameQuery'));
      this.set('gitRepo', this.get('repoNameQuery'));
    },
    clear(){
      // Clears all results and seacrh queires
      this.set('gitUser', null);
      this.set('userNameQuery', null);
      this.set('gitRepo', null);
      this.set('repoNameQuery', null);
    }
  }
});
