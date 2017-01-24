define(['BaseView', 'ContactModel', 'TemplateManager', 'jquery', 'jquery-ui'], 
	(BaseView, ContactModel, TemplateManager, $) => {
		return BaseView.extend({
			model: ContactModel,
			templateUrl: '/app/templates/contact.collection.item',
			events: {
				'click #delete-btn': 'confirmDeleting'
			},

			// ToDo: create component for modal windows
			confirmDeleting: function() {
				var self = this;
				var $modalEl = $('<div/>');
				$modalEl.attr('title', 'Delete Confirmation')

				TemplateManager.render($modalEl, '/app/templates/delete.contact.confirm.modal', this.model.toJSON(), () => {
					$modalEl.dialog({
						resizable: false,
						height: "auto",
						width: 400,
						modal: true,
						buttons: {
							"Delete": function() {
								self.model.destroy();
								self.remove();
							    $(this).dialog("close");
							},
							Cancel: function() {
							    $(this).dialog("close");
							}
						}
			    	});
				});
			}
		});
	}
);