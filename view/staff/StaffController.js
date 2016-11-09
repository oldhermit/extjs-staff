/**
 * This class is the controller for the StaffList view for the application. It is specified as
 * the "controller" of the Staff view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */



Ext.define('StaffApp.view.staff.StaffController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.staff_controller',

    // constructor: function() {
    //     this.editFormPanel = new StaffApp.view.staff.EditEmployeeView();
    // },

    onEditKey: function(button) {
        var gridInst = button.up('stafflist');
        var selection = gridInst.getSelection();
        // var selection = gridInst.getSelectionModel();
        var editFormPanel = new StaffApp.view.staff.EditEmployeeView();

        editFormPanel.getForm().loadRecord(selection);
        editFormPanel.show();
    },

    onDeleteKey: function(button) {
        var gridInst = button.up('stafflist');
        var sm = gridInst.getSelectionModel();
        gridInst.store.remove(sm.getSelection());
        if (gridInst.store.getCount() > 0) {
            sm.select(0);
        }
    },

    onItemSelected: function () {
        //
    }

});

// updateBook: function(button) {
//     var win    = button.up('window'),
//         form   = win.down('form'),
//         values = form.getValues(),
//         id = form.getRecord().get('id');
//     values.id=id;
//     Ext.Ajax.request({
//         url: 'app/data/update.php',
//         params: values,
//         success: function(response){
//             var data=Ext.decode(response.responseText);
//             if(data.success){
//                 var store = Ext.widget('booklist').getStore();
//                 store.load();
//                 Ext.Msg.alert('Обновление',data.message);
//             }
//             else{
//                 Ext.Msg.alert('Обновление','Не удалось обновить книгу в библиотеке');
//             }
//         }
//     });
// },