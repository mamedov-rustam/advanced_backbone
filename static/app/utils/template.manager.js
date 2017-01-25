define(function (require) {
    'use strict';

    var dust = require('dust'),
        $ = require('jquery'),
        _endsWith = require('lodash/string/endsWith'),
        _isFunction = require('lodash/lang/isFunction');

    return {
        renderEl: function (template, model) {
            var el = this.render(template, model);
            return $(el);
        },
        render: function (template, model) {
            if (!wasRegistred(template)) {
                registerTemplate(template);
            }
            return renderRegistredTemplate(template, model);
        },
        renderAsync: function (url, model, success) {
            var templateUrl = convertToTemplateUrl(url);

            if (wasRegistred(templateUrl)) {
                // Simulate async work
                setTimeout(() => renderRegistredTemplate(templateUrl, model, success), 0);
                return;
            }

            $.get(templateUrl, (template) => {
                registerTemplate(template, templateUrl);
                renderRegistredTemplate(templateUrl, model, success);
            });
        }
    };

    function renderRegistredTemplate(template, model, success) {
        var result = '';
        dust.render(template, model, (err, output) => {
            if (err) {
                throw err;
            }

            if (success) {
                _isFunction(success) ? success($(output)) : $(success).html(output);
            } else {
                result = output;
            }
        });

        return result;
    }

    function convertToTemplateUrl(url) {
        var suffix = _endsWith(url, '.dust') ? '' : '.dust';
        return url + suffix;
    }

    function registerTemplate(source, name) {
        name = name || source;
        var compiledSources = dust.compile(source, name);
        dust.loadSource(compiledSources);
    }

    function wasRegistred(name) {
        return !!dust.cache[name];
    }
});