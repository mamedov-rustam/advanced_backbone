define((require) => {
    'use strict';

    var BaseModel = require('BaseModel');

    return BaseModel.extend({
        urlRoot: '/api/contacts',
        defaults: {
            name: '',
            phone: '',
            group: ''
        },
        validationRules: {
            name: {
                required: true,
                length: {
                    min: 2,
                    max: 20
                }
            },
            phone: {
                required: true,
                //Valid numbers:
                // 555-555-5555
                // (555)555-5555
                // (555) 555-5555
                // 555 555 5555
                // 5555555555
                // 1 555 555 5555
                regexp: /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
            },
            group: {
                required: true
            }
        }
    });
});