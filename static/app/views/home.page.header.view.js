define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        template = require('text!/app/templates/home.page.header.dust'),
        _bind = require('lodash/function/bind');

    return BaseView.extend({
        template: template,
        initialize: function(opts) {
            this.parentView = opts.parentView;
        },
        postRender: function() {
            this.$el.on('submit #search-form', (e) => this.search(e)); // ToDo: investigate why 'events' object doesn't work as expected
        },
        search: function(e) {
            e.preventDefault();
            var searchQuery = this.$('#search-query').val();
            this.parentView.trigger('contacts:search', searchQuery);
        }
    });
});