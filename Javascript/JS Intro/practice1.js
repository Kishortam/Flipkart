console.log('practice1.js is connected')

var dinner = ['rice', 'chicken curry', 'daal', 'pickle', 'papad', 'salad', 'gulabjamun']
dinner[6]=('jalebi')
dinner.push('orange juice')
dinner.push('bisleri water')

dinner.pop()
dinner.splice(0,1)
dinner.splice(1,2,'chicken chilly')

console.log(dinner)
console.log(dinner[4])

var mobiles = ['samsung', 'apple', 'lg', 'vivo', 'oppo', 'realme', 'oneplus']
mobiles.push('intex')
mobiles.push('nokia')

mobiles.pop()

mobiles[7]=('motorola')

mobiles.splice(2,1)
mobiles.splice(6,1,'iqoo')

console.log(mobiles)
console.log(mobiles[5])

//object

var user = {
    name:'kishor',
    lastname:'tambe',
    city:'mumbai',
    contact:'98975724521',
}
user.email='kishortam@gmail.com'
user.gender='male'

delete user.gender

console.log(user)
console.log(user.city)

var student = {
    name:'ganesh shirke',
    std:'7th',
    subject:'english',
    marks:46,
}
student.grade="c"
delete student.marks

console.log(student)
console.log(student.std)

//array of objects

let employee = [
    {name:'sukesh kumar', designation:'Manager', salary:'15000'},
    {name:'ritu pathak', designation:'sr. Manager', salary:'19000'},
    {name:'ravi jain', designation:'supervisor', salary:'12000'},
    {name:'dinesh gupta', designation:'ceo', salary:'25000'},

]

console.log(employee[2].name)

let computer = ['acer', 'lenovo', 'hp', 'dell','infinix']
computer[0]='thinkpad'

computer.push('acer')
computer.push('asus')
computer.push('realme')

computer.pop()

computer.splice(0,1,'ibm')
computer.splice(6,1)

console.log(computer)

var teacher = {
    name:'mr. ganesh pawar',
    age:49,
    qualification:'Msc',
    experience:'29 yrs',
}
teacher.school='oxford university'
teacher.bacth= 1996

delete teacher.bacth

console.log(teacher)
console.log(teacher.qualification)

var people = [
    {name:'sharad', age:'79', party:'ncp'},
    {name:'fadanvis', age:'49', party:'bjp'},
    {name:'uddhav', age:'69', party:'ss'},
]

console.log(people[1].age)

//practice1
var items = ['paintings', 'artifacts', 'vase', 'lamps', 'planters', 'book holder', 'fountain', 'candle holders','jars']

items[5] = 'photoframes'
items.push('artificial flowers')
items.push('decor')
items.pop()
items.splice(1,1)
items.splice(8,0,'pickel jar')

console.log(items)

var nameof = {
    brand:'apple',
    code:'12 pro',
    ram:'6gb'
}
nameof.memory='64gb'
nameof.price=49000

console.log(nameof)

//array of objects

var smartwatch = [
    {name:'noise', price:'1999'},
    {name:'fireboult', price:'1599'},
    {name:'boat', price:'2999'}
]

console.log(smartwatch[0])

//conditionls

let age = 19;

if(age=>19)
console.log('he can vote')
else
console.log('he cant vote')

let boys =9;
if(boys >=11)
console.log('we will play cricket')
else
console.log('we cant play')

//ternery

let peoples = 105;
peoples>=100 ? console.log('we will arrange meeting') :  console.log('we did not allow meeting')

let sugar = 9;
sugar >= 5 ? console.log('we take sugar') : console.log('not buying')

let camera = 24000;
if(camera >= 25000){
    if(camera <=30000) {
        console.log('buy camera')
    }
    else{
        console.log('price is more')
    }
}
else{
    console.log('camera is cheap')
}

let guests = 99;
if(guests >= 150){
    if(guests<=200){
        console.log('we order food')
    }
    else{
        console.log('we cant afford to feed')
    }
}
else{
    console.log('we made in home, very small number')
}

//multiple condition

let season = 'summer'
if(season == 'rainy')
console.log('take umbrella');
else if(season == 'summer')
console.log('take a cap');
else if(season == 'cold')
console.log('wear a scarf');
else{
    console.log('no available')
}



