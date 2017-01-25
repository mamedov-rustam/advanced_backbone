define((require) => {
        'use strict';

        var BaseView = require('BaseView'),
            ContactModel = require('ContactModel'),
            TemplateManager = require('TemplateManager'),
            $ = require('jquery'),
            $dialog = require('jquery-ui/widgets/dialog'), // need for $.dialog
            viewTemplate = require('text!/app/templates/contact.collection.item.dust');

        return BaseView.extend({
            model: ContactModel,
            template: viewTemplate,
            events: {
                'click #delete-btn': 'confirmDeleting'
            },

            // ToDo: create component for modal windows
            confirmDeleting: function () {
                var self = this;
                var $modalEl = $('<div/>');
                $modalEl.attr('title', 'Delete Confirmation');

                TemplateManager.renderAsync('/app/templates/delete.contact.confirm.modal', this.model.toJSON(), ($modalEl) => {
                    $modalEl.dialog({
                        resizable: false,
                        height: "auto",
                        width: 400,
                        modal: true,
                        buttons: {
                            'Delete': function () {
                                self.model.destroy();
                                self.remove();
                                $(this).dialog("close");
                            },
                            'Cancel': function () {
                                $(this).dialog("close");
                            }
                        }
                    });
                });
            }
        });
    }
);