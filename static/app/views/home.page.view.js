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
        },
        postRender: function () {
            this.$el.find('#home-header').append(this.headerView.render().$el);
            this.$el.find('#home-main').append(this.contactCollectionView.render().$el);
        }
    });
});