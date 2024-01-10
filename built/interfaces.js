"use strict";
//Din opgave er nu at lave et interface, gerne ved at extende interfaces, som kan dække over denne data struktur.
let data = [
    {
        class: "8b",
        student_count: 22,
        teacher: "Mr. Wright",
        id: 12,
        students: [
            {
                first_name: "Troy",
                last_name: "Baker",
                phone: 744332113,
                id: 221,
            },
            {
                first_name: "Evelyn",
                last_name: "Parker",
                phone: 342842443,
                id: 212,
            },
            {
                first_name: "Petra",
                last_name: "Mukuna",
                phone: 112342753,
                id: 207,
            },
        ]
    }
];
function getClassData(student) {
    console.log('student: ', student.first_name);
    return student.first_name;
}
