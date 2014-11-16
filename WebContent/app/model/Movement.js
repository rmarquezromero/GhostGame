Ext.define('AM.model.Movement', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: 'word',   type: 'string'},
        {name: 'letter', type: 'string'},
        {name: 'result', type: 'int'},
        {name: 'level',  type: 'int'}
    ]
    
    
});

