define((require) => {
        'use strict';

        var BaseView = require('BaseView'),
            ContactModel = require('ContactModel'),
            TemplateManager = require('TemplateManager'),
            _remove = require('lodash/array/remove'),
            $ = require('jquery'),
            $dialog = require('jquery-ui/widgets/dialog'), // need for $.dialog
            contactViewTemplate = require('text!/app/templates/contact.collection.item.dust'),
            deleteContactModalTemplate = require('text!/app/templates/delete.contact.confirm.modal.dust');

        return BaseView.extend({
            model: ContactModel,
            template: contactViewTemplate,
            events: {
                'click #delete-btn': 'confirmDeleting'
            },

            // ToDo: create component for modal windows
            confirmDeleting: function () {
                var self = this;
                var $modalEl = $('<div/>');
                $modalEl.attr('title', 'Delete Confirmation');
                $modalEl = TemplateManager.renderEl(deleteContactModalTemplate, this.model.toJSON());

                $modalEl.dialog({
                    resizable: false,
                    height: "auto",
                    width: 400,
                    modal: true,
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
            }
        });
    }
);