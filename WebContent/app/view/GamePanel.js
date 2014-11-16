Ext.define('AM.view.GamePanel' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.gamePanel',
    
    locales: {
    	title: 'title.gamePanel'
    },
    
    
    layout: 'vbox',
    cls: 'x-game-panel',
    
    initComponent: function() {
        var me = this;
        
        me.items = me.buildItems();
        this.callParent(arguments);
        
    },
    
    buildItems: function() {
        var me = this;
        
        return [
                {
                	xtype: 'component',
                	width: '100%',
                	height: 200,
                	html: '<div class="content">'+
                			'<div id="lose" class="x-lose" style="display:none;"></div>'+
                			'<div id="win" class="x-lose" style="display:none;"></div>'+
                			'<div id="words" class="word">'+
                			   '<div  class="card_aux"></div>'+

            			    '</div>'+

                		  '<br>'+

                		'<div id="word_form_id" class="word_form">'+
                		'</div>'+
                		'</div>'
                },
                {
                	xtype: 'container',
                	width: '100%',
                	flex: 1,
                	layout: {
                		type: 'vbox',
                		align: 'center',
                		pack: 'center'
                	},
                	items: [
						{
							xtype: 'textfield',
							id: 'itemIdLetter',
							cls: 'x-text-letter',
							fieldLabel: '',
							maxLength: 1,
							height: 80,
							width: 80
						},
						{
							xtype: 'button',
							id: 'itemIdBtnAdd',
							cls: 'x-btn-add-letter',
							locales: {
								text: 'buttons.addLetter'
							},
							handler: function() {
								me.fireEvent('onAddLetter', me);
							},
							height: 50,
							width: 150,
							margin: '0 0 0 10'
						},
						{
							xtype: 'button',
							id: 'itemIdBtnPlayAgain',
							cls: 'x-btn-add-letter',
							locales: {
								text: 'buttons.playAgain'
							},
							hidden: true,
							handler: function() {
								me.fireEvent('onPlayAgain', me);
							},
							height: 50,
							width: 150,
							margin: '0 0 0 10'
						}
        	        ]
                }
                
        ];
            
    }
    
    
});

