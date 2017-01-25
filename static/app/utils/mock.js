define(function (require) {
    'use strict';

    var _uniqueId = require('lodash/utility/uniqueId');

    return {
        generateContacts: generateContacts
    };

    function generateContacts() {
        var names = ['John', 'Oleg', 'Jack', 'Petr', 'Ivan', 'Sergey', 'Vitaliy', 'Svetlana'];
        var groups = ['Job', 'Family', 'Friends'];

        var counter = 0;
        return _.map(names, name => {
            return {
                id: _uniqueId(),
                name: name,
                phone: Math.random().toString(10).substring(7),
                group: groups[counter++ % groups.length]
            }
        });
    }
});