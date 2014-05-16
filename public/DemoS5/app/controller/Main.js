Ext.define('DemoS5.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
        {
//      Позвоялет использовать метод getList() для выбора таблицы
            ref: 'list',
            selector: 'grid'
        }
    ],


    init: function () {

//      Позволяет перехватывать события
//      Сначала елемент потом действия на елементе затем отрабатываемая функция
        this.control(
            {
            'List': {itemdblclick: this.editUser },                             //Двойной щелчёк на любой позиции в таблице
            'grid': {selectionchange: this.enableDelButton },                   //Щелчёк на любой позиции в таблице для активации кнопки на удаление
            'button[action=new]': {click: this.addNew},                         //Кнопка "New" на тулбаре
            'button[action=del]': {click: this.delUser},                        //Кнопка "Del" на тулбаре
            'New button[action=add]': {click: this.addUser},                    //Кнока "New" в форме нового пользователя
            'Edit button[action=save]': {click: this.updateUser}                //Кнока "Save" в форме редактирования пользователя
            });
    },

    editUser: function (grid, record) {
//    Открывает форму для редактирования с получеными данными из таблицы
        var view = Ext.widget('Edit');
        view.down('form').loadRecord(record);
    },

    addNew: function () {
//    Открывает пустую форму для создания новой записи в таблицу
        var view = Ext.widget('New');
        view.up('form')
    },

    addUser: function (button) {

// При нажатии на кнопку добавить в форме создания нового пользователя
// Берёт данные из формы, записывает их в хранилише, закрывает форму обновляет хранилише и перерисовывает таблицу
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        var str = this.getStore('DemoS5.store.Users');
        str.add(values);
        win.close();
        this.getList().store.reload();
        this.getList().getView().refresh();
    },

    delUser: function () {
//  Берёт запись из хранилища и удаляет её
        var str = this.getStore('DemoS5.store.Users');
        var selection = this.getList().getSelectionModel().getSelection();
        if (selection) {
            str.remove(selection);
        }
    },

// Берёт запись из хранилища затем берёт данные из форму и заменяет их в хранилище, закрывает форму
    updateUser: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
    },

    enableDelButton: function(grid,records)
// Проверяет выделена ли запись в таблице
// Если да то активирует кнопку для удаления в обратном случае деактивирует
{
    if (records.length)    {
        this.getList().down('button[action=del]').enable();
    } else {
        this.getList().down('button[action=del]').disable();
    }
}
});
