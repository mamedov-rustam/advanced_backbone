define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        ContactCollectionItemView = require('ContactCollectionItemView');

    return BaseView.extend({
        render: function () {
             this.collection.each((model) => {
                var view = new ContactCollectionItemView({model: model});
                this.$el.append(view.render().$el);
            });

            return this;
        }
    });
});