Ext.define('DemoS5.model.Model', {
    extend: 'Ext.data.Model',

//    Обьявление полей в модели
    fields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' }
    ]

//    Работают оба варианта обьявления полей в модели
//    fields: ['id', 'name', 'email']

});