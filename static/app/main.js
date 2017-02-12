define.amd.dust = true; // need for the dust lib
require.config({
    paths: {
        // bower_components
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'bootstrap': '/bower_components/bootstrap/js/bootstrap.min',
        'Backbone': '/bower_components/backbone/backbone',
        'dust': '/bower_components/dustjs-linkedin/dist/dust-full.min',
        'text': '/bower_components/text/text',
        // Custom
        'Mock': '/app/utils/mock',
        'TemplateManager': '/app/utils/template.manager',
        'ModelValidator': '/app/extensions/model.validator',
        'BaseView': '/app/extensions/base.view',
        'BaseModel': '/app/extensions/base.model',
        'BaseRouter': '/app/extensions/base.router',
        'ModalView': '/app/utils/modal.view',
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
            location: '/bower_components/lodash-amd/modern'
        },
        {
            name: 'jquery-ui',
            location: '/bower_components/jquery-ui/ui'
        }
    ]
});

require(['Mock', 'ContactRouter'],
    function (Mock, ContactRouter) {
        window.contacts = Mock.generateContacts();
        new ContactRouter();
    }
);