import Ember from 'ember';

export default Ember.Component.extend({
  //default attributes
  filteredEventsList: [],
  eventTypesList: [],
  selectedEventType: null,
  //observers
  watchEventType: function(){
    let reFilterEvents = this.get('model.events').filterBy('eventType', this.get('selectedEventType'));
    this.set('filteredEventsList', reFilterEvents);
  }.observes('selectedEventType'),
  actions: {
    setSelection(selected){
      this.set('selectedEventType', selected);
    }
  }
});
