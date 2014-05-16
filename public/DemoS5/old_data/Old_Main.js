/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoS5.view.main.Old_Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'north',
            xtype: 'component',
//            cls: 'appBanner',
            padding: 10,
            height: 40,
            html: 'My Company - My Company Moto'
        },

        {
        xtype: 'panel',
        bind: {
//            title: '{name}'
            title: 'DemoApp on Sencha 5 beta'

        },

        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        collapsible: true,
        collapsed: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'}]
        },
        {
        region: 'center',
        xtype: 'tabpanel',
        items:[
            {
                title: 'Tab 1',
                bodyPadding: 20,
                html: '<h2>Content appropriate for the current navigation.</h2>'
            },
            {
                title: 'The Data',
                layout: 'fit',
                items: [{
                    xtype: 'grid',
                    title: 'Simpsons',
                    store: {
                        fields:['name', 'email', 'phone'],
                        data:[
                            { name: 'Lisa',  email: "lisa@simpsons.com",
                                phone: "555-111-1224"  },
                            { name: 'Bart',  email: "bart@simpsons.com",
                                phone: "555-222-1234" },
                            { name: 'Homer', email: "home@simpsons.com",
                                phone: "555-222-1244"  },
                            { name: 'Marge', email: "marge@simpsons.com",
                                phone: "555-222-1254"  }
                        ],
                        proxy: {
                            type: 'memory'
                        }
                    },
                    columns: [
                        { text: 'Name',  dataIndex: 'name' },
                        { text: 'Email', dataIndex: 'email', flex: 1},
                        { text: 'Phone', dataIndex: 'phone' }
                    ]
                }]
            }
        ]
        }
    ]
});
