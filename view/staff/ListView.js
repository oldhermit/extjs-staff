/**
 * This view is a Staff View.
 *
 */

Ext.define('StaffApp.view.staff.ListView', {
    extend: 'Ext.grid.Panel',
    xtype: 'stafflist',

    requires: [
        'StaffApp.view.staff.StaffStore',
        'StaffApp.view.staff.StaffController',
        'StaffApp.view.staff.StaffModel',
        'StaffApp.view.staff.EditEmployeeView'
    ],

    title: 'Personnel',
    controller: 'staff_controller',

    store: {
        type: 'staffstore'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {xtype: 'textfield'},
            {   xtype: 'combobox',
                queryMode: 'local',
                editable: false,
                value: '0',
                store: [[0, 'Все'], [1, 'Муж.'], [2, 'Жен.']]
                //fieldLabel: 'Стать'
            },
            '->',
            { text: 'Добавить' },
            { text: 'Редактировать', handler: 'onEditKey' },
            { text: 'Удалить', handler: 'onDeleteKey' }
        ]
    }],
    columns: [
        { text: 'Фамилия',  dataIndex: 'secondname', flex:2 },
        { text: 'Имя - Отчество', flex:4,
            xtype:'templatecolumn',
            dataIndex:'firstname',
            tpl:'{firstname} {patronym}'
        },

        { text: 'Возраст', dataIndex: 'age', flex:1},
        { text: 'Пол', flex: 1,
            dataIndex: 'isMale',
            xtype:'booleancolumn',
            trueText:'Муж.',
            falseText:'Жен.'        },
        { text: 'Примечание', dataIndex: 'note', flex:4}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
