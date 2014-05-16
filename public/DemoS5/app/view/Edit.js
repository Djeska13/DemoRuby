Ext.define('DemoS5.view.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.Edit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
//      При инициализации рисует форму с пустыми полями и указаными именами полей
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                    }
                ]
            }
        ];
//      Добавляет кнопки и действия для дальнейшего перехвата
        this.buttons = [

            {
                text: 'Save',
                action: 'save'
            },

            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
//      Вызывает родительский клас с указаными аргументами
        this.callParent(arguments);
    }
});