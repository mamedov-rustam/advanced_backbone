define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        TemplateManager = require('TemplateManager'),
        _isFunction = require('lodash/lang/isFunction');

    return Backbone.View.extend({
        getData: function () {
            var dataModel = this.model || this.collection;
            return dataModel && _isFunction(dataModel.toJSON) ? dataModel.toJSON() : {};
        },
        render: function () {
            var html = TemplateManager.render(this.template, this.getData());
            this.$el.html(html);

            return this;
        },
        clear: function () {
            this.$el.html('');
        }
    });
});