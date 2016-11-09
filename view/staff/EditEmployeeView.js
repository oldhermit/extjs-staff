
Ext.define('StaffApp.view.staff.EditEmployeeView', {
    extend: 'Ext.form.Panel',
    xtype: 'staffedit',
    modal: true,
    floating: true,
    closable: true,
    autoRender: true,
    title: "Добавление",
    bodyPadding: 5,
    width: 700,
    height: 400,

    layout: {
        type: 'vbox',
        align: 'center'
    },
    defaults: {
        width: '100%'
    },
    border: true,
    items: [{
        layout: 'hbox',
        xtype: 'container',
        items: [{
            flex: 1,
            width: '100%',
            items: [{
                //width: '45%',
                xtype: 'textfield',
                name: 'secondName',
                fieldLabel: 'Фамилия'
            }, {
                xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'Имя'
            }, {
                xtype: 'textfield',
                name: 'patronym',
                fieldLabel: 'Отчество'
            }]
        }, {
            flex: 1,
            width: '100%',
            items: [{
                xtype: 'numberfield',
                fieldLabel: 'Возраст',
                name: 'age'
            }, {
                xtype: 'textareafield',
                grow: true,
                name: 'comment',
                fieldLabel: 'Комментарий'
            }]
        }]
    },
        {
            width: '',
            items: {
                xtype: 'fieldcontainer',
                //fieldLabel: 'Пол',
                defaultType: 'radiofield',
                layout: 'hbox',
                items: [{
                    boxLabel: 'M',
                    name: 'sex',
                    inputValue: 'm',
                    id: 'radio1'
                }, {
                    boxLabel: 'Ж',
                    name: 'sex',
                    inputValue: 'f',
                    id: 'radio2'
                }]
            }
        }],
    buttons: [{
        text: 'Сохранить'
    }, {
        text: 'Отмена'
    }]
});
