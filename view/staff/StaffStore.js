Ext.define('StaffApp.view.staff.StaffStore', {
    extend: 'Ext.data.Store',
    alias: 'store.staffstore',
    controller: 'staff_controller',

    fields: [
        'secondname', 'firstname', 'patronym', 'age', 'ismale', 'note'
    ],

    data: { items: [
        {secondname: 'Петренко', firstname: "Петро", patronym: "Васильович",
            age: 30, ismale: true, note: "True Aryan"},
        {secondname: 'Кузьменко', firstname: "Вікторія", patronym: "Володимирівна",
            age: 25, ismale: false, note: "Cute as fuck"},
        {secondname: 'Іванов', firstname: "Іван", patronym: "Іванович",
            age: 41, ismale: true, note: "Good family man"},
        {secondname: 'Василенко', firstname: "Василина", patronym: "Василівна",
            age: 34, ismale: false, note: "Stupid cunt"},
        {secondname: 'Семененко', firstname: "Семен", patronym: "Семенович",
            age: 50, ismale: true, note: "Old dude"},
        {secondname: 'Карпенко', firstname: "Карпо", patronym: "Карпович",
            age: 18, ismale: true, note: "Square head"}
    ]},

    // filters: [
    //     function(item) {
    //         console.log(item);
    //         return item.data.age > 30;
    //     },
    //     function(item) {
    //         return item.data.ismale;
    //     }
    // ],

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
