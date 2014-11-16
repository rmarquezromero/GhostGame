Ext.define('AM.controller.Main', {
    extend: 'Ext.app.Controller',
    
    // STORES
    stores: [
        'Movement'
    ],
    
    // MODELS
    models: [
        'Movement'
    ],
    
    // VISTAS
    views: [
        'Main',
        'GamePanel',
        'Levels'
    ],

    refs: [
        {ref: 'main',         selector: 'main'},
        {ref: 'gamePanel',    selector: 'gamePanel'},
        {ref: 'levelsPanel',    selector: 'levels'}
    ],
    
    
    init: function() {
        
        this.control({
            'main': {
                afterrender: this.listenerAfterRenderMain
            },
            'gamePanel': {
            	onAddLetter: this.addLetter,
            	onPlayAgain: this.listenerPlayAgain
            }
        });
    },
    
    listenerAfterRenderMain: function() {
    	var me = this;
    },
    
    _getAnim: function(target) {
    	return Ext.create('Ext.fx.Anim', {
		    target: target,
		    esasing: 'ease',
		    duration: 2000,
		    from: {
		        width: 300,
		        height: 80,
		        opacity: 0.4,       
		        color: '#ffffff', 
		        left: 0
		    },
		    to: {
		    	opacity: 1,
		        width: 70, 
		        height: 80 
		    }
		});
    },
    
    listenerPlayAgain: function() {
    	window.location.reload();
    },
    
    addLetter: function() {
    	var me = this,
    		panel = me.getGamePanel(),
    		btnLevelNormal = me.getLevelsPanel().down('#tgl_normal'),
    		level = (btnLevelNormal.pressed) ? 0 : 1,
			letterInput = panel.down('#itemIdLetter'),
			letter = letterInput.getValue();
        
        if (Ext.isEmpty(letter)) {
        	alert(Ux.locale.Manager.get('messages.addLetter'));
        	letterInput.focus();
        	return;
        }
		
		generalWord = generalWord + letter;		
		
		
		var divWords = Ext.get('words'),
			cardHuman = document.createElement('div');
		
		cardHuman.setAttribute('id', generalWord);
		cardHuman.setAttribute('class', 'card_human');
		cardHuman.style.display = 'none';
		cardHuman.innerHTML = letter;
		
		divWords.appendChild(cardHuman);
		
		
		var divGeneralWord = Ext.get(generalWord);
		me._getAnim(divGeneralWord);
		divGeneralWord.show();
		
		letterInput.reset();
		letterInput.focus();
		
		var params = {word: generalWord, letter: letter, level: level, result: '0'};
		var rec = Ext.create(me.getMovementModel(), params);
		
		Ext.Ajax.request({
            url: 'Ghost',
            method:'POST',
            params : {
            	action: 'PLAYER_MOVE',
            	movement: Ext.JSON.encode(rec.data)
            },
            scope : this,
            success: function(response, eOpts) {
            	
            	var res = Ext.decode(response.responseText),
            		btnPlayAgain = panel.down('#itemIdBtnPlayAgain'),
            		btnAddLetter = panel.down('#itemIdBtnAdd'),
            		letterInput = panel.down('#itemIdLetter'),
            		record = Ext.create(me.getMovementModel(), res);
            	
            	generalWord = record.get('word');
            	
            	var divWords = Ext.get('words'),
        			cardComputer = document.createElement('div');
            	
            	cardComputer.setAttribute('id', generalWord);
       		 	cardComputer.setAttribute('class', 'card_computer');
       		 	cardComputer.style.display = 'none';
       		 	cardComputer.innerHTML = record.get('letter');
	        	 
	        	 if (record.get('result') === 0) {
	        		 divWords.appendChild(cardComputer);
	        		 var divGeneralWord = Ext.get(generalWord);
        			 me._getAnim(divGeneralWord);
        		 	 divGeneralWord.show();
	        	 
	        	 } else if (record.get('result') === 1) {
	        		 divWords.appendChild(cardComputer);
	        		 var divGeneralWord = Ext.get(generalWord);
	        		 divGeneralWord.show();
	        		 
	        		 Ext.defer(function() {
	        			 var divWin = Ext.get('win'),
	        			 	 divMsg = document.createElement('div');
	        			 
	        			 divMsg.setAttribute('class', 'message');
	        			 divMsg.innerHTML = Ux.locale.Manager.get('messages.youWin');
	        			 divWin.appendChild(divMsg);
	        			 me._getAnim(divWin);
	        			 divWin.show();
	        			 
	        			 letterInput.setDisabled(true);
	        			 btnPlayAgain.show();
	        			 btnAddLetter.hide();
	        		 	},1100);
	        		 
	        		 
	        	 } else {
	        		 Ext.defer(function() {
	        			 var divLose = Ext.get('lose');
	        			 var divMsg = document.createElement('div');
	        			 divMsg.setAttribute('class', 'message');
	        			 divMsg.innerHTML = Ux.locale.Manager.get('messages.youLose');
	        			 divLose.appendChild(divMsg);
	        			 
	        			 me._getAnim(divLose);
	        			 
	        			 divLose.show();
	        			 
	        			 letterInput.setDisabled(true);
	        			 btnPlayAgain.show();
	        			 btnAddLetter.hide();
	        		 	},1100);
	        	 }
            },
            failure: function(response, eOpts) {
            }
        }); 
    	
    }
    
    
    
});
