define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        TemplateManager = require('TemplateManager'),
        _isFunction = require('lodash/lang/isFunction'),
        _forEach = require('lodash/collection/forEach'),
        _isArray = require('lodash/lang/isArray'),
        _remove = require('lodash/array/remove');

    return Backbone.View.extend({

        constructor(options) {
            this._subViews = [];
            Backbone.View.apply(this, [options]);
        },

        renderData() {
            var dataModel = this.model || this.collection;
            return dataModel && _isFunction(dataModel.toJSON) ? dataModel.toJSON() : dataModel;
        },

        render() {
            var html = TemplateManager.render(this.template, this.renderData());
            this.$el.html(html);
            this.postRender && this.postRender();

            return this;
        },

        clear() {
            this._removeSubViews();
            this.$el.html('');
        },

        remove(opts) {
            opts = opts || {};

            if (!opts.silent) {
                this._removeSubViews();
                this.trigger('remove');
            }

            Backbone.View.prototype.remove.apply(this, arguments);
        },

        registerSubViews() {
            for (var i = 0; i < arguments.length; i++) {
                if (_isArray(arguments[i])) {
                    _forEach(arguments[i], (view) => this._addOneToSubViews(view));
                } else {
                    this._addOneToSubViews(arguments[i]);
                }
            }
        },

        _addOneToSubViews(view) {
            this._subViews.push(view);
            view.on('remove', () => _remove(this._subViews, view), this);
        },

        _removeSubViews() {
            _forEach(this._subViews, (view) => view.remove({silent: true}));
            this._subViews = [];
        }
    });
});