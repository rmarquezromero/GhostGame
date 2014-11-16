Ext.define('AM.view.Main' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.main',
    
    cls: 'x-main',
    
    
    requires: [
       'AM.view.Flags',
       'AM.view.Levels'
    ],

    
    locales: {
    	title: 'title.options'
    },
    
    
    layout: {
    	type: 'vbox'
    },
    
    initComponent: function() {
        var me = this;
        
        me.items = me.buildItems();
        this.callParent(arguments);
        
        
    },
    
    buildItems: function() {
    	 var me = this;
         
         return [
                 {
                	 xtype: 'flags',
                	 width: '100%',
                	 height: 80,
                	 margin: '10 10 10 10'
                 },
                 {
                	 xtype: 'levels',
                	 width: '100%',
                	 height: 80,
                	 margin: '0 10 10 10'
                 },
                 {
                	 xtype: 'label',
                	 cls: 'x-label-instructions',
                	 locales: {
                		text: 'field.label.instructions' 
                	 },
                	 height: 20,
                	 margin: '0 5 10 10'
                 },
                 {
                	 xtype: 'label',
                	 cls: 'x-instructions',
                	 width: 350,
                	 locales: {
                		text: 'field.text.instructions' 
                	 },
                	 height: 'auto',
                	 margin: '0 5 10 10'
                 }
                 
                 
                 /*{
                 	xtype: 'panel',
                 	border: 0,
                 	width: '100%',
                 	items: [
     					{
     					    xtype: 'combobox',
     					    fieldLabel: '&nbsp;',
     					    itemId: 'comboDifficulty',
     					    margin: '10 0 0 10',
     					    locales: {
     					    	fieldLabel: 'field.label.level'
     					    },
     					    store: levelStore,
     					    editable: false,
     					    frame: false,
     					    valueField: 'id',
     					    displayField: 'value',
     					    listeners: {
     					        'afterrender': function(combo, eOpts) {
     					            combo.setValue(combo.getStore().data.get(0).get('id'));
     					        }
     					    }
     					}
         	        ]
                 }*/
         ];
    }
    
    
});