var name ='kishor'
var username = 'kishortam'
let mobilenumber = 9892624368
let speaker = 'jbl'

//type of
let city = 'mumbai'
let pincode = 400005
let isLiveinMumbai = true

console.log(name)
console.log(username)
console.log(mobilenumber)
console.log(speaker)
console.log(typeof city)
console.log(typeof pincode)
console.log(typeof isLiveinMumbai)

// object

let food = ['rice', 'chicken-curry','garlic-chutney', 'daal', 'pickle']
// food[2] = 'green-chutney'

food.push('fish-fry')
food.push('gulabjamun')
food.push('jalebi')
food.pop()
food.splice(1,1)
food.splice(1,0,'fish-curry')

console.log(food)
console.log(food[3])

//

let student = {
    name: 'jayesh parkeh',
    school: 'sarswati vidyamandir',
    city: 'ramnagar',
}
student.roll= 32
student.grade ='A'
student.div = 'D'

delete student.roll

console.log(student)
console.log(student.school)

//array of objects

let president = [
    {name:'jagan babu', age: 39, qualification:'bsc'},
    {name:'dilip kumar', age:35, qualification:'msc'},
    {name:'arvind gupta', age: 49, qualification:'phd'},
]

console.log(president)

//conditionals

let price = 5000;

if(price>=5000)
console.log('we are not buying')
else
console.log('we are buying a watch')

let chocolate = 9;
chocolate <= 10 ? console.log('we buy chocolate') : console.log('really sorry')