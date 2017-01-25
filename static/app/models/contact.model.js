define((require) => {
    'use strict';

    var Backbone = require('Backbone');

    return Backbone.Model.extend({
        urlRoot: '/api/contacts',
        defaults: {
            name: '',
            phone: '',
            group: ''
        }
    });
});