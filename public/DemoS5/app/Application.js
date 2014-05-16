/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('DemoS5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'DemoS5',

    views: [

    ],


//    Обезательно вписать контролер для его инициализации
    controllers: [
        'DemoS5.controller.Main'
    ],

//    Обезательно вписать стор для его инициализации
        stores: [
        'DemoS5.store.Users'
    ],
    
    launch: function () {
    }
});
