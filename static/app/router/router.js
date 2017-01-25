define((require) => {
    var Backbone = require('Backbone'),
        HomePageView = require('HomePageView'),
        ContactFormView = require('ContactFormView');

    return Backbone.Router.extend({
        routes: {
            '': 'allContacts',
            'contacts': 'allContacts',
            'contacts/new': 'newContact'
        },

        initialize: function() {
            Backbone.history.start();
        },

        allContacts: function() {
            new HomePageView().render();
        },

        newContact: function() {
            new ContactFormView().render();
        }
    });
});