define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        HomePageHeaderView = require('HomePageHeaderView'),
        ContactCollectionView = require('ContactCollectionView'),
        template = require('text!/app/templates/home.page.dust');

    return BaseView.extend({
        template: template,

        initialize: function () {
            this.contactCollectionView = new ContactCollectionView();
            this.headerView = new HomePageHeaderView();
            this.listenTo(this.headerView, 'contacts:search', (query) => this.contactCollectionView.search(query));

            this.registerSubViews(this.headerView, this.contactCollectionView);
        },

        postRender: function () {
            this.$('#home-header').html(this.headerView.render().$el);
            this.$('#home-main').html(this.contactCollectionView.render().$el);
        }
    });
});