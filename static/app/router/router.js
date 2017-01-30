define((require) => {
    var BaseRouter = require('BaseRouter'),
        ContactController = require('ContactController');

    return BaseRouter.extend({
        handlers: [
            {
                controller: ContactController,
                routes: {
                    '': 'allContacts',
                    'contacts': 'allContacts',
                    'contacts/new': 'newContact',
                    'contacts/:id': 'editContact'
                }
            }
        ]
    });

});