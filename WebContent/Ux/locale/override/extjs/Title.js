Ext.define('Ux.locale.override.extjs.Title', {
    override : 'Ext.panel.Title',

    requires : [
        'Ux.locale.override.extjs.Component'
    ],

    constructor : function() {
    	this.callSuper(arguments);
        
    },

    setLocale : function(locale) {
        var me = this,
		  	locales = me.locales,
		    text        = locales.text,
		    manager     = me.locale,
		    defaultText = '';
        if (text) {
            if (Ext.isObject(text)) {
                defaultText = text.defaultText;
                text        = text.key;
            }

            text = manager.get(text, defaultText);

            if (Ext.isString(text)) {
                me.setText(text);
            }
        }

        me.callParent(arguments);
    }
});