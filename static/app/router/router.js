define((require) => {
    var Backbone = require('Backbone'),
        HomePageView = require('HomePageView'),
        ContactFormView = require('ContactFormView'),
        $ = require('jquery');

    return Backbone.Router.extend({
        routes: {
            '': 'allContacts',
            'contacts': 'allContacts',
            'contacts/new': 'newContact',
            'contacts/:id': 'editContact'
        },

        initialize: function() {
            Backbone.history.start();
        },

        allContacts: function() {
            this.currentView && this.currentView.remove();
            this.currentView = new HomePageView({router: this}).render();
            this.renderCurrentView();
        },

        newContact: function() {
            this.currentView && this.currentView.remove();
            this.currentView = new ContactFormView({router: this}).render();
            this.renderCurrentView();
        },

        editContact: function(contactId) {
            this.currentView && this.currentView.remove();
            this.currentView = new ContactFormView({contactId: contactId, router: this});
            this.renderCurrentView();
        },

        renderCurrentView: function() {
            $('#main').html(this.currentView.render().$el);
        }
    });
});