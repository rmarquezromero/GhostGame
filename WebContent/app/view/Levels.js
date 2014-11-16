Ext.define('AM.view.Levels' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.levels',
    
    cls: 'x-levels',
    
    layout: {
    	type: 'auto'
    },
    
    initComponent: function() {
        var me = this;
        
        me.items = me.buildItems();
        this.callParent(arguments);
        
        // Listener to change languages
        // Listener to toggle on load if language is the same than navigation.language
        me.down('#ctLevels').items.items.forEach(function(c){
    		c.addListener('click', function() {
    			//Ux.locale.Manager.updateLocale(c.value);
    		});
    		c.addListener('afterrender', function() {
    			//me.toggleOnLoad(c);
    		});
        });
        
    },
    
    buildItems: function() {
        
        return [
			{
			   	xtype: 'label',
			   	cls: 'x-label-levels',
			   	flex:1,
			   	locales: {
			   		text: 'field.label.level'
			   	}
			},
            {
               	 xtype: 'container',
               	 itemId: 'ctLevels',
               	 cls: 'x-container-levels',
               	 layout: 'hbox',
               	 width: '100%',
               	 flex:1,
               	 items: [
           	        
						{
						    xtype: 'button',
						    cls: 'x-btn-level',
						    itemId: 'tgl_normal',
						    margin: '0 0 0 10',
						    locales: {
						    	tooltip: 'field.text.level.normal',
						    	text: 'field.text.level.normal'
						    },
						    scale: 'large',
						    scope: this,
						    enableToggle: true,
						    pressed: true,
						    toggleGroup: 'levels',
						    allowDepress: false,
						    value: '0'
						},
						{
	                        xtype: 'button',
	                        cls: 'x-btn-level',
	                        itemId: 'tgl_hard',
	                        margin: '0 0 0 10',
	                        locales: {
	                        	tooltip: 'field.text.level.hard',
						    	text: 'field.text.level.hard'
						    },
	                        scale: 'large',
	                        scope: this,
	                        enableToggle: true,
	                        pressed: false,
	                        toggleGroup: 'levels',
	                        allowDepress: false,
	                        value: '1'
	                    }
               	         
       	         ]
                }
        ];
   }
 
    
    
    
});