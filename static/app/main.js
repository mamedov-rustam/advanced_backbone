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
        'BaseView': '/app/extensions/base.view',
        'ContactModel': '/app/models/contact.model',
        'ContactCollection': '/app/collections/contact.collection',
        'ContactCollectionView': '/app/views/contact.collection.view',
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
        var contacts = Mock.generateContacts();
        window.contacts = contacts;

        new ContactRouter();
    }
);