define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        HomePageHeaderView = require('HomePageHeaderView'),
        ContactCollectionView = require('ContactCollectionView'),
        ContactCollection = require('ContactCollection'),
        template = require('text!/app/templates/home.page.dust');

    return BaseView.extend({
        el: '#main',
        template: template,
        initialize: function () {
            var contactCollection = new ContactCollection(window.contacts);
            this.contactCollectionView = new ContactCollectionView({collection: contactCollection});
            this.headerView = new HomePageHeaderView();
        },
        postRender: function () {
            this.$el.find('#home-header').append(this.headerView.render().$el);
            this.$el.find('#home-main').append(this.contactCollectionView.render().$el);
        }
    });
});