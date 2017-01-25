define((require) => {
    'use strict';

    var Backbone = require('Backbone');

    return Backbone.Model.extend({
        urlRoot: '/api/contacts',
        defaults: {
            name: 'UNKNOWN',
            phone: 'UNKNOWN',
            group: 'UNKNOWN'
        }
    });
});