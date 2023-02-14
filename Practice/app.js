console.log('app.js is connected')

let a = [1,2,3,4,5,6,7,8,9]
console.log(a)

//to get square of values
function sqr(num){
    return num * num;
}

let result = a.map(sqr)

console.log(result)

//
function multi(num){
    return num * 2;
}
let results = a.map(multi)

console.log(results)

//another example, preferable style of coding

let b = [10,20,30,40,50,60,70,80,90]
console.log(b)

let multiple = b.map((num)=>{
    return num * num
})
console.log(multiple)

let c = [1,2,3,4,5]

let summary = c.map((num)=>{
    return num*num
})
console.log(summary)

let users = [
    {firstName:'kishor' , lastName:'Tambe', age:27, job:"manager"},
    {firstName:'vikrant' , lastName:'shinde', age:30, job:"lab assistant"},
    {firstName:'jagrut' , lastName:'jadhav', age:15, job:"youtuber"},
    {firstName:'vishal' , lastName:'shinde', age:23, job:"banker"},
    {firstName:'akshay' , lastName:'wadhve', age:17, job:"service"},
    {firstName:'kishor' , lastName:'mahadik', age:15, job:"teacher"},
]
let usersName = users.map((users)=>{
    // if you want only first name
    // return users.firstName
    // if you want first and last name
    // return users.firstName + " " + users.lastName
    // if you want age also with few words
    return users.firstName + ' ' + users.lastName + ' and the age is ' + users.age
})
 console.log(usersName)

//filter for age :

let filetrs = users.filter((users)=>{
    // return users.age <18
    return users.job == 'youtuber'
    // if(users.age < 18 && users.job == 'service'){
    //     return users;
    // }
}).map((users)=>{
    return users.firstName
})
//if you don't want whole data of filter, and the only spaecific value.
console.log(filetrs)

let same = users.find((users)=>{
    return users.firstName == 'kishor'
})
console.log(same)