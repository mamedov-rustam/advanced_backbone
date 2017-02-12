define.amd.dust = true; // need for the dust lib
require.config({
    paths: {
        // Vendor
        'jquery': '/vendor/jquery/dist/jquery.min',
        'bootstrap': '/vendor/bootstrap/js/bootstrap.min',
        'Backbone': '/vendor/backbone/backbone',
        'dust': '/vendor/dustjs-linkedin/dust-full.min',
        'text': '/vendor/text/text',
        // Custom
        'Mock': '/app/utils/mock',
        'TemplateManager': '/app/utils/template.manager',
        'BaseView': '/app/extensions/base.view',
        'ModalView': '/app/utils/modal.view',
        'ContactModel': '/app/models/contact.model',
        'ContactCollection': '/app/collections/contact.collection',
        'ContactCollectionView': '/app/views/contact.collection.view',
        'ContactCollectionItemView': '/app/views/contact.collection.item.view'
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

require(['Mock', 'ContactCollection', 'ContactCollectionView', 'TemplateManager', 'jquery'],
    function (Mock, ContactCollection, ContactCollectionView, TemplateManager, $) {
        var contactCollection = new ContactCollection(Mock.generateContacts());
        var contactCollectionView = new ContactCollectionView({collection: contactCollection});
        $('#main-content').html(contactCollectionView.render().$el);
    }
);