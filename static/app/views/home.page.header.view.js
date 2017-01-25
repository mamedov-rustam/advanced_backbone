define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        template = require('text!/app/templates/home.page.header.dust');

    return BaseView.extend({
        template: template
    });
});