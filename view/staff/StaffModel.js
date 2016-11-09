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
        stringForSearch: {
            bind: {
                dataForFilter: '{stringForSearch}'
            },
            get: function (dataObject) {
                debugger;
                console.log(dataObject.dataForFilter);
            }
        }
    }
});
