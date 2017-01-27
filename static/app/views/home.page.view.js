define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        HomePageHeaderView = require('HomePageHeaderView'),
        ContactCollectionView = require('ContactCollectionView'),
        ContactCollection = require('ContactCollection'),
        template = require('text!/app/templates/home.page.dust');

    return BaseView.extend({
        template: template,
        initialize: function (opts) {
            var contactCollection = new ContactCollection(window.contacts);
            this.contactCollectionView = new ContactCollectionView({collection: contactCollection, router: opts.router});
            this.headerView = new HomePageHeaderView();
            this.registerSubViews([this.contactCollectionView, this.headerView]);
        },
        postRender: function () {
            this.$('#home-header').html(this.headerView.render().$el);
            this.$('#home-main').html(this.contactCollectionView.render().$el);
        }
    });
});