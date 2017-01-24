define.amd.dust = true; // need for the dust lib
require.config({
	paths: {
        // Vendor
        'lodash': '/vendor/lodash/lodash.min',
        'jquery': '/vendor/jquery/jquery.min',
        'jquery-ui': '/vendor/jquery-ui/jquery-ui.min',
        'bootstrap': '/vendor/bootstrap/js/bootstrap.min',
        'Backbone': '/vendor/backbone/backbone',
        'dust': '/vendor/dustjs-linkedin/dust-full.min',
        // Custom
        'Mock': '/app/utils/mock',
        'TemplateManager': '/app/utils/template.manager',
        'BaseView': '/app/extensions/base.view',
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
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
});

require(['Mock', 'ContactCollection', 'ContactCollectionView', 'TemplateManager', 'jquery'], 
    function(Mock, ContactCollection, ContactCollectionView) {
	    var contactCollection = new ContactCollection(Mock.generateContacts());
        window.test = contactCollection;
        var contactCollectionView = new ContactCollectionView({collection: contactCollection});
        $('#main-content').html(contactCollectionView.render().$el);
    }
);