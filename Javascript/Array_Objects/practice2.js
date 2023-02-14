//array
let fruits = ['apple', 'mango', 'banana', 'orange', 'guava']

fruits[1] = 'Mango Maharaj'
fruits.push('chickoo')
fruits.push('avocado')
fruits.push('strawberry')
fruits.unshift('dragon fruit')

fruits.pop()

fruits.splice(1,1)
fruits.splice(2,0,'Banana shake')

console.log(fruits)

//object
let customer = {
    name:'Kishor Tambe',
    contact: 9892623219,
    email:'kishortam@gmail.com',
    city:'Mumbai',
}
customer.payment=27000
customer.product = 'television'
console.log(customer.product)

let a = [1,2,3,4,5]
let b =[...a,6,7,8,9,0]
console.log(a)
console.log(b)

let indianMob = ['Micromax', 'Karbonn', 'Max', 'Infinix']
let EuropeMob = ['iPhone','Samsung', 'Nokia', 'Vivo']
let allMob = [...indianMob,EuropeMob]

console.log(indianMob)
console.log(EuropeMob)
console.log(allMob)

//array of objects

let guests = [
    {name:'sheela', age:'40', relation:'Mavshi', location:'virar'},
    {name:'vatsala', age:'70', relation:'granny', location:'vanaste'},
    {name:'leela', age:'46', relation:'mother', location:'colaba'},
    {name:'santosh', age:'50', relation:'mama', location:'nalasopara'},
]
guests.push({name:'mangesh', age:'44', relation:'mama', location:'panvel'},)
console.log(guests)