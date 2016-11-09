Ext.define('StaffApp.view.staff.StaffStore', {
    extend: 'Ext.data.Store',
    alias: 'store.staffstore',
    // xtype: 'staffstore',
    // model: 'StaffApp.view.staff.StaffModel',

    fields: [
        'secondname', 'firstname', 'patronym', 'age', 'isMale', 'note'
    ],

    data: { items: [
        {secondname: 'Петренко', firstname: "Петро", patronym: "Васильович",
            age: 30, isMale: true, note: "True Aryan"},
        {secondname: 'Кузьменко', firstname: "Вікторія", patronym: "Володимирівна",
            age: 25, isMale: false, note: "Cute as fuck"},
        {secondname: 'Іванов', firstname: "Іван", patronym: "Іванович",
            age: 41, isMale: true, note: "Good family man"},
        {secondname: 'Василенко', firstname: "Василина", patronym: "Василівна",
            age: 34, isMale: false, note: "Stupid cunt"},
        {secondname: 'Семененко', firstname: "Семен", patronym: "Семенович",
            age: 50, isMale: true, note: "Old dude"},
        {secondname: 'Карпенко', firstname: "Карпо", patronym: "Карпович",
            age: 18, isMale: true, note: "Square head"}
    ]},

    // sorters: [{
    //     direction: 'DESC',
    //     property: 'secondname'
    // }]
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
