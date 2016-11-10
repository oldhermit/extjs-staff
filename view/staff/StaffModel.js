/**
 * This class is the view model for the Staff view of the application.
 */

Ext.define('StaffApp.view.staff.StaffModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.staffmodel',
    fields: [
        'secondname', 'firstname', 'patronym',
        { name: 'age', type: 'integer' },
        { name: 'ismale', type: 'bool' },
        'note'
    ],
    formulas: {
        filters: {
            bind: {
                stringForSearch: '{stringForSearch}'
            },
            get: function (dataObject) {
                var store = Ext.getStore();
                console.log(store.data);
                store.filterBy(function(record) {
                    console.log(record);
                    return true;
                });
                // debugger;
                // console.log(dataObject.stringForSearch);
                //get store
                //filter by name
                //return filter
            }
        }
    }
});
