Ext.define('DemoS5.store.Users', {
    extend: 'Ext.data.Store',
    model: 'DemoS5.model.Model',
    alias: "store.users",
// Авто загрузка, авто синхронизация и авто обновление
    autoLoad: true,
    sorters: 'Name',
//    sorters: {
//        'name',
//        direction: 'ASC'
//    },
    autoSync: true,
    autoRefresh: true,

// Размер страниц для пагинации
    pageSize: 5,

// Настройки прокси где брать данные для хранилища, как их читать и записывать
    proxy: {
        url: '/users',
        type: 'rest',

        reader: {
            type: 'json',
            rootProperty: 'users',
            totalProperty: 'totalCount'
        },
        writer: {
            type: 'json',
            rootProperty: 'user'
        }
    }
});