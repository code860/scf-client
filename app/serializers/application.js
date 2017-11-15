import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedDocument = this._super(store, primaryModelClass, payload, id, requestType);

    // Customize document meta
    //normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);

    return normalizedDocument;
  },

});
