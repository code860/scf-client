import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'scf-client/config/environment';
import Ember from 'ember';
import DS from 'ember-data';
const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.APIUrl,
  pathForType(type) {
    return pluralize(underscore(type));
  },
  handleResponse(status, headers, payload, requestData){
    if(status === 400 || status === 401 || status === 403 || status === 404){
      //handles error messages to set the meta tag in the response
      return new DS.AdapterError(payload.meta['error-msg']);
    }
    return this._super(status, headers, payload, requestData);
  }
});
