define((require) => {
        'use strict';

        var BaseView = require('BaseView'),
            ContactModel = require('ContactModel'),
            _remove = require('lodash/array/remove'),
            $ = require('jquery'),
            ModalView = require('ModalView'),
            contactViewTemplate = require('text!/app/templates/contact.collection.item.dust'),
            deleteContactModalTemplate = require('text!/app/templates/delete.contact.confirm.modal.dust');

        return BaseView.extend({
            model: ContactModel,
            template: contactViewTemplate,
            events: {
                'click #delete-btn': 'confirmDeleting'
            },

            initialize() {
                var self = this;
                // We don't need to register modal window as subview
                this.deleteConfirmationModal = new ModalView({
                    title: 'Confirm deleting',
                    template: deleteContactModalTemplate,
                    model: self.model,
                    buttons: {
                        'Delete': function () {
                            _remove(window.contacts, self.model.toJSON());
                            self.model.destroy();
                            self.remove();
                            $(this).dialog("close");
                        },
                        'Cancel': function () {
                            $(this).dialog("close");
                        }
                    }
                });
            },

            confirmDeleting() {
                this.deleteConfirmationModal.render().show();
            }
        });
    }
);