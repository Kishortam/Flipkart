let celebrities = [
    {firtsName:'Dinesh', LastName:'Vijan', age:23, Profession:'Director'},
    {firtsName:'Ramesh', LastName:'Taurani', age:17, Profession:'Producer'},
    {firtsName:'Arman', LastName:'Malik', age:15, Profession:'Singer'},
    {firtsName:'Jubin', LastName:'Nautiyal', age:23, Profession:'Singer'},
    {firtsName:'Ranveer', LastName:'Singh', age:22, Profession:'Actor'},
]
console.log(celebrities)

//map:

let profile = celebrities.map((celebrities)=>{
    return celebrities.firtsName + ' ' + celebrities.Profession
})
console.log(profile)

//filter :

let music = celebrities.filter((celebrities)=>{
    return celebrities.Profession == 'Singer'
}).map((celebrities)=>{
    return celebrities.firtsName +' ' + celebrities.LastName
})
console.log(music)

//example 2

let mobiles = [
    {company:'Apple', price:20000, memory:'128GB', country:'america'},
    {company:'Samsung', price:18000, memory:'64GB', country:'korea'},
    {company:'Oppo', price:12000, memory:'256GB', country:'china'},
    {company:'Vivo', price:12000, memory:'128GB', country:'china'},
    {company:'Motorola', price:15000, memory:'32GB', country:'japan'},
    {company:'Micromax', price:12000, memory:'256GB', country:'india'},
    
]
console.log(mobiles)

//when we want only specific data and not whole array, then we use map
//map:

let brands = mobiles.map((mobiles)=>{
    // return mobiles.company
    // return mobiles.company + ' ' + mobiles.price
    return mobiles.company + ' ' + mobiles.price + ' ' + mobiles.memory
})
console.log(brands)

//when we want to filter out some data, then we use filter & using map in this we can show a specific value.
//filter:

let cost = mobiles.filter((mobiles)=>{
    return mobiles.price <= 15000
    // return mobiles.memory == '128GB'
    // return mobiles.country == 'china'
}).map((mobiles)=>{
    return mobiles.company + ' ' + mobiles.price
})
console.log(cost)

// when we want a single value of same data, we can use find, by this way we can catch first of the same values.
let see = mobiles.find((mobiles)=>{
    return mobiles.price == 12000
})
console.log(see.company)

//ex.3

let students = [
    {name:'Lata Mangeshkar', age:20, std:5, village:'vanaste'},
    {name:'Raju Nakte', age:12, std:2, village:'borghar'},
    {name:'Ajay Sawant', age:17, std:7, village:'belghar'},
    {name:'Pooja Dhandrut', age:16, std:5, village:'vanaste'},
    {name:'Revati nadkar', age:13, std:4, village:'Kairat'},
    {name:'Heera Naskar', age:17, std:4, village:'vanaste'},
    {name:'Asha Bhosle', age:20, std:6, village:'belghar'},
    {name:'vaibhav mangle', age:12, std:2, village:'kairat'},
    {name:'Narayan Raut', age:18, std:6, village:'vanaste'},
]
console.log(students)

let impData = students.map((students)=>{
    // return students.name
    // return students.name + ' ' + students.std
    // return students.name + ' studing in ' + students.std +' and the age is ' + students.age
    return students.name + ' from village ' + students.village
})
console.log(impData)

let filterout = students.filter((students)=>{
    // return students.village == 'vanaste'
    // return students.age <=15
    if(students.village == 'vanaste' && students.age >=15){
        return students;
    }
}).map((students)=>{
    return students.name + ' ' + students.village + ' ' + students.age
})
console.log(filterout)

