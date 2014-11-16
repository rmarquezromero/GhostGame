Ext.define('AM.view.Flags' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.flags',
    
    cls: 'x-flags',
    
    layout: {
    	type: 'auto'
    },
    
    initComponent: function() {
        var me = this;
        
        me.items = me.buildItems();
        this.callParent(arguments);
        
        // Listener to change languages
        // Listener to toggle on load if language is the same than navigation.language
        me.down('#ctLanguages').items.items.forEach(function(c){
    		c.addListener('click', function() {
    			Ux.locale.Manager.updateLocale(c.value);
    			localStorage.setItem('lang', c.value);
    		});
    		c.addListener('afterrender', function() {
    			me.toggleOnLoad(c);
    		});
        });
        
    },
    
    buildItems: function() {
        
        return [
			{
			   	xtype: 'label',
			   	cls: 'x-label-flags',
			   	flex:1,
			   	locales: {
			   		text: 'field.label.chooseLanguage'
			   	}
			},
            {
               	 xtype: 'container',
               	 itemId: 'ctLanguages',
               	 cls: 'x-container-flags',
               	 layout: 'hbox',
               	 width: '100%',
               	 flex:1,
               	 items: [
           	        
						{
						    xtype: 'button',
						    cls: 'x-btn-flag',
						    itemId: 'tgl_en',
						    margin: '0 0 0 10',
						    locales: {
						    	tooltip: 'tooltip.english'
						    },
						    icon: './resources/images/english-32.png',
						    scale: 'large',
						    scope: this,
						    enableToggle: true,
						    pressed: false,
						    toggleGroup: 'language',
						    allowDepress: false,
						    value: 'en'
						},
						{
	                        xtype: 'button',
	                        cls: 'x-btn-flag',
	                        itemId: 'tgl_es',
	                        margin: '0 0 0 10',
	                        locales: {
						    	tooltip: 'tooltip.spanish'
						    },
	                        icon: 'resources/images/spain-32.png',
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'language',
	                        allowDepress: false,
	                        value: 'es'
	                    },
	                    {
	                        xtype: 'button',
	                        cls: 'x-btn-flag',
	                        itemId: 'tgl_fr',
	                        margin: '0 0 0 10',
	                        locales: {
						    	tooltip: 'tooltip.french'
						    },
	                        icon: 'resources/images/france-32.png',
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'language',
	                        allowDepress: false,
	                        value: 'fr'
	                    },
	                    {
	                        xtype: 'button',
	                        cls: 'x-btn-flag',
	                        itemId: 'tgl_de',
	                        margin: '0 0 0 10',
	                        locales: {
						    	tooltip: 'tooltip.german'
						    },
	                        icon: 'resources/images/germany-32.png',
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'language',
	                        allowDepress: false,
	                        value: 'de'
	                    },
	                    {
	                        xtype: 'button',
	                        cls: 'x-btn-flag',
	                        itemId: 'tgl_it',
	                        margin: '0 0 0 10',
	                        locales: {
						    	tooltip: 'tooltip.italian'
						    },
	                        icon: 'resources/images/italy-32.png',
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'language',
	                        allowDepress: false,
	                        value: 'it'
	                    },
	                    {
	                        xtype: 'button',
	                        cls: 'x-btn-flag',
	                        itemId: 'tgl_pt',
	                        margin: '0 0 0 10',
	                        locales: {
						    	tooltip: 'tooltip.portuguese'
						    },
	                        icon: 'resources/images/portugal-32.png',
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'language',
	                        allowDepress: false,
	                        value: 'pt'
	                    }
               	         
       	         ]
                }
        ];
   },
   
   toggleOnLoad: function(btn) {
	   var langBtn = btn.value,
	   langLocalStorage = localStorage.getItem('lang');
	   
	   var lang = (langLocalStorage) ? langLocalStorage : ((navigator.language) ? navigator.language.split('-')[0] : 'en');
		   
	   if (langBtn === lang) {
			btn.toggle(true);
		}
   }
   
 
    
    
    
});