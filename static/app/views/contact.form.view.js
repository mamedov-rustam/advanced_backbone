define((require) => {
    'use strict';

    var BaseView = require('BaseView'),
        ContactModel = require('ContactModel'),
        template = require('text!/app/templates/contact.form.dust'),
        _forIn = require('lodash/object/forIn'),
        _find = require('lodash/collection/find'),
        _assign = require('lodash/object/assign'),
        _uniqueId = require('lodash/utility/uniqueId');


    return BaseView.extend({
        template: template,

        initialize: function(opts) {
            this.router = opts.router;

            var modelData = _find(window.contacts, {id: opts.contactId}) || {};
            this.model = new ContactModel(modelData);
        },

        events: {
            'submit #contact-form': 'submit'
        },

        submit: function(e) {
            e.preventDefault();
            this.hideErrors();

            _forIn(this.model.toJSON(), (value, key) => {
                if (key == 'id'){
                    return;
                }

                var newValue = this.$el.find('#' + key).val();
                this.model.set(key, newValue);
            });

            if (this.model.isValid() && this.model.save()) {
                if (this.model.get('id')) {
                    var oldModel = _find(window.contacts, {id: this.model.get('id')});
                    _assign(oldModel, this.model.toJSON());
                } else {
                    this.model.set('id', _uniqueId());
                    window.contacts.push(this.model.toJSON());
                }

                this.router.navigate('contacts', {trigger: true, replace: true});
            } else {
                this.showErrors();
            }
        },

        postRender: function() {
            _forIn(this.model.toJSON(), (value, key) => {
                this.$el.find('#' + key).val(value);
            });
        },

        showErrors: function() {
            _forIn(this.model.validationError, (value, key) => {
                this.$el.find('#' + key + 'Block').addClass('has-error');
                var $fieldError = this.$el.find('#' + key + 'Error');
                $fieldError.html(value);
                $fieldError.show();
            });
        },

        hideErrors: function() {
            _forIn(this.model.toJSON(), (value, key) => {
                this.$el.find('#' + key + 'Block').removeClass('has-error');
                this.$el.find('#' + key + 'Error').hide();
            });
        }
    });
});