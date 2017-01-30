define((require) => {
    var BaseRouter = require('BaseRouter'),
        HomePageView = require('HomePageView'),
        ContactFormView = require('ContactFormView');

    function ContactController() {}

    ContactController.prototype.allContacts = function() {
        this.currentView && this.currentView.remove();
        this.currentView = new HomePageView({router: this});
        this.renderCurrentView();
    };

    ContactController.prototype.newContact = function() {
        this.currentView && this.currentView.remove();
        this.currentView = new ContactFormView();
        this.renderCurrentView();
    };

    ContactController.prototype.editContact = function(contactId) {
        this.currentView && this.currentView.remove();
        this.currentView = new ContactFormView({contactId: contactId});
        this.renderCurrentView();
    };

    ContactController.prototype.renderCurrentView = function() {
        $('#main').html(this.currentView.render().$el);
    };

    return ContactController;
});