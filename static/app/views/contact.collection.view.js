define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        ContactCollectionItemView = require('ContactCollectionItemView');

    return BaseView.extend({
        initialize: function(opts) {
            this.router = opts.router;
        },

        render: function () {
            this.clear();
            this.collection.each((model) => {
                var view = new ContactCollectionItemView({model: model, router: this.router});
                this.$el.append(view.render().$el);
            });

            return this;
        }
    });
});