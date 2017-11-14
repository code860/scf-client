import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'scf-client/config/environment';
import Ember from 'ember';
const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.connectURL,
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
