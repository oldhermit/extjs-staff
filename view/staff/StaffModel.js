/**
 * This class is the view model for the Staff view of the application.
 */

Ext.define('StaffApp.view.staff.StaffModel', {
    extend: 'Ext.data.Model',
    alias: 'model.staff',
    fields: [
        'secondname', 'firstname', 'patronym',
        { name: 'age', type: 'integer' },
        { name: 'isMale', type: 'bool' },
        'note'
    ]
});
