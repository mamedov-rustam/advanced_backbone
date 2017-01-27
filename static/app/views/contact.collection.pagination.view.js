define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        $ = require('jquery'),
        template = require('text!/app/templates/contact.collection.pagination.view.dust');

    return BaseView.extend({
        template: template,

        pagination: {
            activePage: 1
        },

        events: {
          'click #page': 'changePage'
        },

        initialize: function(opts) {
            this.parentView = opts.parentView;
            opts.parentView.on('contacts:search', () => this.changePage(1));
            opts.parentView.trigger('contacts:page', {
                number: 1,
                callback: (totalPages) => this.setPaginationParams(1, totalPages)
            });
        },

        setPaginationParams: function(activePage, totalPages) {
            this.pagination.activePage = activePage;
            this.pagination.totalPages = totalPages;
        },

        changePage: function(e) {
            if (typeof e == 'number') {
                this.pagination.activePage = e;
            } else {
                var number = $(e.currentTarget).attr('data-number');
                this.pagination.activePage = number;
            }

            this.parentView.trigger('contacts:page', {
                number: this.pagination.activePage,
                callback: (totalPages) => {
                    this.setPaginationParams(this.pagination.activePage, totalPages);
                    this.render();
                }
            });
        },

        renderData: function() {
            var totalPages = this.pagination.totalPages;
            var pages = [];
            while (totalPages > 0) {
                pages.unshift({
                    number: totalPages,
                    isActive: totalPages == this.pagination.activePage
                });
                totalPages--;
            }

            return {
                isDataPresented: !!this.pagination.totalPages,
                pages: pages
            };
        }
    });
});