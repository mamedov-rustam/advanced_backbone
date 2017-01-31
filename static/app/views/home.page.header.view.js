define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        template = require('text!/app/templates/home.page.header.dust');

    return BaseView.extend({
        template: template,
        postRender: function() {
            this.$el.on('submit #search-form', (e) => this.search(e)); // ToDo: investigate why 'events' object doesn't work as expected
        },
        search: function(e) {
            e.preventDefault();
            var searchQuery = this.$('#search-query').val();
            this.trigger('contacts:search', searchQuery);
        }
    });
});