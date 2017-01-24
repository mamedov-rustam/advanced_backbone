define(['dust', 'jquery', 'lodash'], function(dust, $, _) {
	return {
		render: render
	};

	function render($el, templateUrl, model, success) {
		var suffix = _.endsWith(templateUrl, '.dust') ? '' : '.dust'
		$.get(templateUrl + suffix, (template) => {
			var compiledSources = dust.compile(template, templateUrl);
			dust.loadSource(compiledSources);
			dust.render(templateUrl, model, (err, output) => {
				if (err) {
					throw err;
				};

				$el.html(output);
				success && success();
			});
		});
	}
});