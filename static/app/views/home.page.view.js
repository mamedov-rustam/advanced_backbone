define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        HomePageHeaderView = require('HomePageHeaderView'),
        ContactCollectionView = require('ContactCollectionView'),
        ContactCollectionPaginationView = require('ContactCollectionPaginationView'),
        ContactCollection = require('ContactCollection'),
        template = require('text!/app/templates/home.page.dust');

    return BaseView.extend({
        template: template,
        initialize: function (opts) {
            this.headerView = new HomePageHeaderView({parentView: this});

            var contactCollection = new ContactCollection(window.contacts);
            this.contactCollectionView = new ContactCollectionView({
                parentView: this,
                collection: contactCollection,
                router: opts.router
            });

            this.contactCollectionPaginationView = new ContactCollectionPaginationView({parentView: this});

            this.registerSubViews([this.contactCollectionView, this.headerView]);
        },
        postRender: function () {
            this.$('#home-header').html(this.headerView.render().$el);
            this.$('#home-main').html(this.contactCollectionView.render().$el);
            this.$('#home-footer').html(this.contactCollectionPaginationView.render().$el);
        }
    });
});