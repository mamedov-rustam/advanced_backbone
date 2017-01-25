define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        ContactModel = require('ContactModel'),
        template = require('text!/app/templates/contact.form.dust'),
        _forIn = require('lodash/object/forIn');

    return BaseView.extend({
        el: '#main',
        template: template,

        initialize: function() {
            this.model = this.model || new ContactModel();
        },

        events: {
            'submit #contact-form': 'submit'
        },

        submit: function() {
            _forIn(this.model.toJSON(), (value, key) => {
                var newValue = this.$el.find('#' + key).val();
                this.model.set(key, newValue);
            });
        },

        postRender: function() {
            _forIn(this.model.toJSON(), (value, key) => {
                this.$el.find('#' + key).val(value);
            });
        }
    });
});