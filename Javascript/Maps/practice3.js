let students = [
    {name:'ramesh', class:6, div:'A'},
    {name:'prakash', class:3, div:'C'},
    {name:'Janhavi', class:3, div:'D'},
    {name:'mukesh', class:6, div:'B'},
    {name:'rishita', class:5, div:'A'},
]

// let profile = students.map((students)=>{
//     return students.name +' ' + students.div
// })
// console.log(profile)

let profile = students.map((students)=>{
    return students.name + " " + students.class
})
console.log(profile)

// 

let employee = [
    {name:'Rajesh', designation:'manager', age:49},
    {name:'Pooja', designation:'supervisor', age:29},
    {name:'Dilip', designation:'chief manager', age:24},
    {name:'Suzzane', designation:'hod', age:35},
]
let employeeDetails = employee.map((employee)=>{
    return employee.name + ' is a ' +employee.designation
})
console.log(employeeDetails)

let sort = employee.filter((employee)=>{
    return employee.age > 29
}).map((employee)=>{
    return employee.name
})
console.log(sort)