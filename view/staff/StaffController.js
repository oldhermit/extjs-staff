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

    callModal: function(button, isAdding) {
        var gridInst = button.up('stafflist');
        var selection = gridInst.getSelection();
        var editFormPanel = new StaffApp.view.staff.EditEmployeeView();
        editFormPanel.isAdding = isAdding;
        editFormPanel.parentComponent = gridInst;
        if (!isAdding) {
            editFormPanel.getForm().loadRecord(selection[0]);
        }
        editFormPanel.show();
    },

    onEditKey: function(button) {
        this.callModal(button, false);
    },

    onInsertKey: function(button) {
        this.callModal(button, true);
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
    },

    saveChanges: function (button) {
        var editForm = button.up('staffedit');
        if (editForm.isAdding) {
            editForm.parentComponent.store.add(editForm.getForm().getFieldValues());
        } else {
            editForm.getForm().updateRecord();
        }
        editForm.close();
    },

    closeForm: function (button) {
        var editForm = button.up('staffedit');
        editForm.close();
    }
});
