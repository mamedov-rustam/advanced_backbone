define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        TemplateManager = require('TemplateManager'),
        _isFunction = require('lodash/lang/isFunction');

    return Backbone.View.extend({
        renderData: function () {
            var dataModel = this.model || this.collection;
            return dataModel && _isFunction(dataModel.toJSON) ? dataModel.toJSON() : dataModel;
        },
        render: function () {
            var html = TemplateManager.render(this.template, this.renderData());
            this.$el.html(html);
            this.postRender && this.postRender();

            return this;
        },
        clear: function () {
            this.$el.html('');
        }
    });
});