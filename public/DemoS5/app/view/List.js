Ext.define('DemoS5.view.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.List',
    title: 'DemoApp on Sencha Ext JS 5 beta',
    store: 'DemoS5.store.Users',
// Присоиденёные придметы
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',

// Предметы на тулбаре
                items: [
                    {
                        xtype: 'button',
                        text: 'New',
                        action: 'new'
                    },
                    {
                        xtype: 'button',
                        text: 'Del',
                        action: 'del',
                        disabled: true
                    }
                ]
            },
            {
// Елементы для работы со страницами
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                store:'DemoS5.store.Users',
                displayInfo: true
            }
        ],

//    Столбцы для таблицы
        columns:
            [
                { text: 'Id', dataIndex: 'id', flex: 1 },
                { text: 'Name',  dataIndex: 'name', flex: 1},
                { text: 'Email', dataIndex: 'email', flex: 1 }
            ]
});