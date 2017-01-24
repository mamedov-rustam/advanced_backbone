define(['Backbone', 'TemplateManager', 'lodash'], function(Backbone, TemplateManager, _) {
	return Backbone.View.extend({
		getData: function() {
			var dataModel = this.model || this.collection;
			return dataModel && _.isFunction(dataModel.toJSON) ? dataModel.toJSON() : {};
		},
		render: function() {
	     	TemplateManager.render(this.$el, this.templateUrl, this.getData());
			return this;
		},
		clear: function() {
			this.$el.html('');
		}
	});
});