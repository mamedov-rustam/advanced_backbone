define((require) => {
    var Backbone = require('Backbone'),
        _forEach = require('lodash/collection/forEach'),
        _forIn = require('lodash/object/forIn');

    return Backbone.Router.extend({
        initialize: function() {
            _forEach(this.handlers, (handler) => {
                var controller = new handler.controller();

                _forIn(handler.routes, (method, url) => {
                    this.route(url, function() {
                        controller[method].apply(controller, arguments)
                    })
                })
            });

            Backbone.history.start();
        }
    });
});