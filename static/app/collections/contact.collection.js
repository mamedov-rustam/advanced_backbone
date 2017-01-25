define((require) => {
    'use strict';

    var Backbone = require('Backbone'),
        ContactModel = require('ContactModel');

    return Backbone.Collection.extend({
        model: ContactModel
    });
});