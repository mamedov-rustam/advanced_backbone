define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        TemplateManager = require('TemplateManager'),
        _isFunction = require('lodash/lang/isFunction'),
        _union = require('lodash/array/union'),
        _forEach = require('lodash/collection/forEach');

    return Backbone.View.extend({
        _subViews: [],

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
        },
        remove: function() {
            this._removeSubViews();
            Backbone.View.prototype.remove.apply(this, arguments);
        },
        registerSubViews: function(subViews) {
            this._subViews = _union(this._subViews, subViews);
        },
        _removeSubViews: function() {
            _forEach(this._subViews, (view) => view.remove());
            this._subViews = [];
        }
    });
});