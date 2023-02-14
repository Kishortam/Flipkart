console.log('app.js is connected for map & filetrs')

let users = [
    {firstName:'kishor' , lastName:'Tambe', age:27, job:"manager"},
    {firstName:'vikrant' , lastName:'shinde', age:30, job:"lab assistant"},
    {firstName:'jagrut' , lastName:'jadhav', age:15, job:"youtuber"},
    {firstName:'vishal' , lastName:'shinde', age:23, job:"banker"},
    {firstName:'akshay' , lastName:'wadhve', age:17, job:"service"},
    {firstName:'kishor' , lastName:'Pawar', age:32, job:"manager"},
]
//mapping
let profile = users.map((users)=>{
    return users.firstName + ' ' + users.lastName
})

console.log(profile)

//filter:
let filteration = users.filter((users)=>{
    return users.age < 18
})
console.log(filteration)

// for the specific value.
// let filteration = users.filter((users)=>{
//     return users.age >18
// }).map((users)=>{
//     return users.firstName + " " + users.lastName
// })
// console.log(filteration)

let same = users.find((users)=>{
    return users.firstName == 'kishor'
})
console.log(same)