var fruits = ['apple', 'mango', 'peach', 'dragonfruit', 'orange','chikkoo']
fruits[2] = 'guava'
fruits.push('jackfruit')
fruits.push('strawberry')

fruits.pop()
// to delete value of specific position
fruits.splice(1,0)
//to replace value of specific position
fruits.splice(3,2,'fruits')


console.log(fruits)

let water = ['bisleri', 'aquafina', 'kinley', 'himalaya', 'zurica']

console.log(water)
console.log(water[3])

//object:

let friend = {
    name:'Vikrant Shinde',
    age: 29,
    bloodgroup: 'A+',
    city:'Indore',
}
friend.village='Ahmednagar'
friend.pincode=400005

delete friend.pincode

console.log(friend)

let jagrut = {
    name:'Jagrut Jadhav',
    age: 26,
    village:'Talegaon',
    city:'lower parel'
}
jagrut.color='pink'
jagrut.salary=37000

delete jagrut.salary

console.log(jagrut)

//extra 
let numerics = [1,2,3,4,5]
let allNumerics = [...numerics,6,7,8,9]

console.log(allNumerics)

let cheapmobiles = ['vivo','oppo','realme','iqoo','poco']
let allMobiles = [...cheapmobiles,'apple', 'samsung', 'nokia', 'motorola']

console.log(allMobiles)

//array of object

let myFriends = [
    {name:'vishal shinde', age:26, city:'mankhurd', job:'banker'},
    {name:'vikrant shinde', age:29, city:'indore', job:'lab ass.'},
    {name:'jagrut jadhav', age:25, city:'lower parel', job:'youtuber'},
    {name:'prathmesh baiker', age:26, city:'dombivali', job:'driver'},
]
myFriends.push({name:'Akshay wadhve', age:25, city:'kopar', job:'vendor'})
console.log(myFriends)