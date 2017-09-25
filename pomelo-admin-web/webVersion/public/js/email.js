Ext.onReady(function () {
    Ext.get('myButton').on('click', function () {
        alert('You clicked the button!');
    });
});



Ext.application({
    name: "HelloExt", launch: function () {
        Ext.create('Ext.panel.Panel', {
            width: 1750, height: 720, layout: 'border', items: [{
                region: 'south',

                xtype: 'panel',
                height: 20,
                split: false,
                html: '欢迎登录!',
                margins: '0 5 5 5'
            },{
                title: 'WestRegion is collapsible',
                region:'west',
                xtype: 'panel',
                margins: '5 0 0 5',
                width: 200,
                collapsible: true,
                id: 'west-region-container',
                layout: 'fit'
            },
        {
            title: 'Center Region',
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            collapsible:true,
            margins: '5 5 0 0',
            html: '<span><%-logibean.uname%></span>'
        }],
            renderTo: Ext.getBody()
        });
    }
});