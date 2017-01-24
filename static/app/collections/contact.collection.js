define(['Backbone', 'ContactModel'], (Backbone, ContactModel) => {
	return Backbone.Collection.extend({
		model: ContactModel
	});
});