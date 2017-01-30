define.amd.dust = true; // need for the dust lib
require.config({
    paths: {
        // Vendor
        'jquery': '/vendor/jquery/jquery.min',
        'bootstrap': '/vendor/bootstrap/js/bootstrap.min',
        'Backbone': '/vendor/backbone/backbone',
        'dust': '/vendor/dustjs-linkedin/dust-full.min',
        'text': '/vendor/text/text',
        // Custom
        'Mock': '/app/utils/mock',
        'TemplateManager': '/app/utils/template.manager',
        'ModelValidator': '/app/extensions/model.validator',
        'BaseView': '/app/extensions/base.view',
        'BaseModel': '/app/extensions/base.model',
        'BaseRouter': '/app/extensions/base.router',
        'ContactController': '/app/controller/contact.controller',
        'ContactModel': '/app/models/contact.model',
        'ContactCollection': '/app/collections/contact.collection',
        'ContactCollectionView': '/app/views/contact.collection.view',
        'ContactCollectionPaginationView': '/app/views/contact.collection.pagination.view',
        'ContactCollectionItemView': '/app/views/contact.collection.item.view',
        'HomePageView': '/app/views/home.page.view',
        'HomePageHeaderView': '/app/views/home.page.header.view',
        'ContactFormView': '/app/views/contact.form.view',
        'ContactRouter': '/app/router/router',
    },
    map: {
        '*': {
            'underscore': 'lodash'
        }
    },
    shim: {
        "bootstrap": {"deps": ['jquery']}
    },
    packages: [
        {
            name: 'lodash',
            location: '/vendor/lodash-amd/modern'
        },
        {
            name: 'jquery-ui',
            location: '/vendor/jquery-ui/ui'
        }
    ]
});

require(['Mock', 'ContactRouter'],
    function (Mock, ContactRouter) {
        window.contacts = Mock.generateContacts();
        new ContactRouter();
    }
);