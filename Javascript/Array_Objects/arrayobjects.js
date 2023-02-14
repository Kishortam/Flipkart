// console.log('arrayobjects.js is connected')

// var name='Kishor Tambe'
// var email ='kishortam@gmail.com'

// console.log(email)

// Tip: [] its an Array for multiple value. we can add number of data or values in array []

let breakfast = ['milk', 'bread', 'butter', 'coffee']
//if you want to alter or change value of any index number
breakfast[0] = 'cornflakes'
//to add value or data in list
breakfast.push('peanut butter')
breakfast.push('banana')

//to delete or remove value from end, it will automatically remove last value.
breakfast.pop()

// to delete a value from specific position.
// breakfast.splice(1,2) 

//to add a value on specific position
breakfast.splice(0,3,'oats')

// to see a list of value or data
console.log(breakfast)

//if you wish to see a single value then, there is index number starting from 0, 1,2,3..., you must mention its index number.
console.log(breakfast[3])

let shoppinglist =['shirt', 'jeans', 'trackpants', 'underwear', 'sunglass', 'cap']
// shoppinglist[3]='vest'

// shoppinglist.push('watch')
// shoppinglist.push('shoes')

// shoppinglist.pop()
// shoppinglist.splice(3,1)
shoppinglist.splice(2,0,'nike','adidas')
shoppinglist.splice(2,1)


console.log(shoppinglist)
console.log(shoppinglist[3])

//
var stationary=['pen','pencil','ruler','tape','marker','color']
// stationary[4]='permannt marker'
// stationary.push('diary')
// stationary.pop()
// stationary.splice(2,1)
stationary.splice(2,0,'measure scale')

console.log(stationary)

// Object

let user = {
    name:'kishor',
    email:'kishortam@gmail.com',
    phone:'9897647642',
    city:'mumbai'
}
//to add a value to object
user.brand='apple'
user.fruit='banana'

//to delete a value from object
delete user.brand

// to see data or value
console.log(user)

// to see particular value
console.log(user.city)

let numbers = [1,2,3,4,5]
let totalnumbers =[...numbers,6,7,8,9]

console.log(totalnumbers)

// array of objects

var users = [
    {name:'kishor', email:'kishortam@gmail.com', course:'ms-cit'},
    {name:'pooja', email:'pooja@gmail.com', course:'tally'},
    {name:'asha', email:'asha@gmail.com', course:'excel'}
]

console.log(users)
//to see specific value
console.log(users[1].email)

//example: luckydraw

var customers = [
    {name:'Prakash', city:"delhi", website:'flipkart'},
    {name:'nilesh', city:"mumbai", website:'amazon'},
    {name:'rajesh', city:"kolkata", website:'myntra'},
    {name:'narayan', city:"jaipur", website:'ajio'},
    {name:'akshay', city:"assam", website:'flipkart'},
    {name:'dilip', city:"pune", website:'snapdeal'},
    {name:'paresh', city:"patna", website:'lenskart'},
]

let luckyUser = Math.floor(Math.random()*customers.length)

console.log(customers[luckyUser].name)