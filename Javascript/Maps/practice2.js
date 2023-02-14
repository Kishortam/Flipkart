let workers = [
    {name:'nishanth raj', village:'ramnagar', age:29, salary:12000},
    {name:'mangesh desai', village:'khairat', age:23, salary:12300},
    {name:'rajan shirke', village:'belghar', age:34, salary:15000},
    {name:'himesh varma', village:'ambeli', age:17, salary:7000},
    {name:'nikesh jadhav', village:'vai', age:59, salary:18900},
]

let data = workers.map((workers)=>{
    return workers.name + ' ' + workers.age
})
console.log(data)

//example 2:

let students = [
    {name:'nishanth raj', village:'ramnagar', age:29, course:'Bsc'},
    {name:'mangesh desai', village:'khairat', age:23, course:'Msc'},
    {name:'rajan shirke', village:'belghar', age:34, course:'M.com'},
    {name:'himesh varma', village:'ambeli', age:17, course:'Phd'},
    {name:'nikesh jadhav', village:'vai', age:59, course:'Llb'},
]

let courser = students.map((students)=>{
    // return students.name + ' ' + students.course
    return students.name + ' belongs to village ' + students.village
})
console.log(courser)
//filter:
let filtIt = students.filter((students)=>{
    return students.age <= 25
})
console.log(filtIt)

//
let smartwatch = [
    {brand:'noise', price:1500, color:'blue', country:'india'},
    {brand:'fire-boult', price:1900, color:'black', country:'canada'},
    {brand:'boat', price:1200, color:'red', country:'india'},
    {brand:'amazefit', price:1500, color:'blue', country:'india'},
]

let sort = smartwatch.map((smartwatch)=>{
    return smartwatch.brand + ' ' + smartwatch.country 
})
console.log(sort)
//filter and map
let sortOut = smartwatch.filter((smartwatch)=>{
    return smartwatch.price <= 1500
}).map((smartwatch)=>{
    return smartwatch.brand + ' ' + smartwatch.price + ' '+ smartwatch.color
})
console.log(sortOut)