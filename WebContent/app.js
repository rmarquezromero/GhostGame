Ext.Loader.setConfig({
            enabled: true
});


Ext.application({
    name: 'AM',
    appFolder: 'app',

    
    controllers: [
        'Main'
    ],
    
    requires: [
       'Ux.locale.Manager',
       'Ux.locale.override.extjs.Component',
       'Ux.locale.override.extjs.Text',
       'Ux.locale.override.extjs.Button',
       'Ux.locale.override.extjs.FieldContainer',
       'Ux.locale.override.extjs.MenuItem',
       'Ux.locale.override.extjs.Panel',
       'Ux.locale.override.extjs.Label',
       'AM.view.GamePanel'
       
    ],
    
    
    launch: function() {
    	
    	var langLocalStorage = localStorage.getItem('lang');
        
        
        Ux.locale.Manager.setConfig({
            ajaxConfig : {
                method : 'GET'
            },
            language   : (langLocalStorage) ? langLocalStorage : ((navigator.language) ? navigator.language.split('-')[0] : 'en'),
            tpl        : 'app/data/locales/{locale}.json',
            type       : 'ajax'
        });

        
        Ux.locale.Manager.updateLocale((langLocalStorage) ? langLocalStorage : ((navigator.language) ? navigator.language.split('-')[0] : 'en'));
		Ux.locale.Manager.applyLocales();
		

        Ext.create('Ext.container.Viewport', {
        	layout: 'hbox',
        	height: 600,
        	cls: 'x-viewport',
            items: [
                
                {
                	xtype: 'main',
                	border: 0,
                	width: 400,
                	height: 420
                },
                {
                	xtype: 'gamePanel',
                	border: 0,
                	width: 600,
                	height: 420
                }
                
            ]
        });
    }
});