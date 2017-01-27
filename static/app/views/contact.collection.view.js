define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        ContactCollectionItemView = require('ContactCollectionItemView'),
        _filter = require('lodash/collection/filter'),
        _findIndex = require('lodash/array/findIndex'),
        _isString = require('lodash/lang/isString'),
        _isNumber = require('lodash/lang/isNumber'),
        _chunk = require('lodash/array/chunk');

    return BaseView.extend({
        currentSearchQuery: '',

        initialize: function(opts) {
            this.router = opts.router;
            this.parentView = opts.parentView;
            this.parentView.on('contacts:search', this.search, this);
            this.parentView.on('contacts:page', this.changePage, this);
        },

        changePage: function(pageConfig) {
            var page = pageConfig.number - 1;
            var itemsPerPage = pageConfig.itemsPerPage || 3;

            var models = this.findContactsByCurrentSearchQuery();
            var modelsByPages = _chunk(models, itemsPerPage);

            pageConfig.callback && pageConfig.callback(modelsByPages.length);
            this.resetCollection(modelsByPages[page]);
        },

        search: function(searchQuery) {
            this.currentSearchQuery = searchQuery;
            this.changePage({number: 1});
        },

        findContactsByCurrentSearchQuery: function() {
            return _filter(window.contacts, (contact) => {
                var index = _findIndex(Object.values(contact), val => {
                    var strVal = _isNumber(val) || _isString(val) ? val.toString() : '';
                    return strVal.toLowerCase().includes(this.currentSearchQuery.toLowerCase());
                });
                return index != -1;
            });
        },

        resetCollection: function(collection) {
            this.collection.reset(collection);
            this.render();
        },

        render: function () {
            this.clear();
            if (this.collection.isEmpty()) {
                this.$el.html('<h1 class="text-center">Sorry, nothing to show...</h1>');
            }

            this.collection.each((model) => {
                var view = new ContactCollectionItemView({model: model, router: this.router});
                this.registerSubViews([view]);
                this.$el.append(view.render().$el);
            });

            return this;
        },
    });
});