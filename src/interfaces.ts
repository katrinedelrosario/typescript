//Din opgave er nu at lave et interface, gerne ved at extende interfaces, som kan dække over denne data struktur.

  interface classData {
    class: string
    student_count: number
    teacher: string
    id: number
    students: studentData[]
  }

  interface studentData {
    first_name: string
    last_name: string
    phone: number
    id: number
  }

  let data: classData[] = [
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
  ]

  function getClassData(student: studentData) {
    console.log('called student:', student);
    return student.first_name
    
  }