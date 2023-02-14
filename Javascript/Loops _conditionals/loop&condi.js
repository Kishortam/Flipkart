//condition : if & else

 let age = 18;
if(age>=18)
console.log('you can marry')
else
console.log('sorry! you are under age')

let time = 2;
if(time>=11)
console.log('the store is open')
else
console.log('store is closed')

let price = 5;
if(price<=10)
console.log('we are going to buy choclate')
else
console.log('chocolate is expensive')

let cloth = 'shirt';
if(cloth=='shirt')
console.log('buy shirt')
else
console.log('we need only shirt')

//multiple condition
let mobile = 17000;
if(mobile>=20000){
    if(mobile<=25000){
        console.log('we buy mobile')
    }
    else{
        console.log('its expensive')
    }
}
else{
    console.log('its very cheap')
}

let tv = 14000;
if(tv>=12000){
    if(tv<=15000){
        console.log('buy tv')
    }
    else{
        console.log('price is more')
    }
}
else{
    console.log('it will be cheap quality tv')
}

//many conditions
let friend = 'vishal';

if(friend == 'jagrut')
console.log('go on long drive');
else if(friend == 'vishal')
console.log('make jokes and timepass');
else if(friend == 'vikrant')
console.log('share thoughts with each other')
else{
    console.log('no other friend')
}

//ternary
let girl = 12
girl>= 18 ? console.log('marriage') : console.log('under age ...no marriage')

//loop:
//we can add index value= 0 or 1 or 2 or any, add index length = 10,20 or any, ie. it will continue till that serial number, result will be get into length.
for (let index = 0; index < 10; index++) {
    console.log('kishor') 
}
//we can make table out of this=>
for (let index = 1; index <=10; index++) {
    console.log(index*1)
}
//using multiplication value i.e. index value * desired number, then we get table of that number.
for (let index = 1; index <=10; index++) {
    console.log(index * 2)
    
}
//
for (let index = 2; index <= 10; index++) {
    console.log(index * 2)
}
//
for (let index = 1; index <=10; index++) {
    console.log(index + 1)
    
}
//
for (let index = 1; index <=10; index++) {
    if(index%2 ==00){
        console.log(index, 'is even')
    }
    else{
        console.log(index, 'is odd')
    }
    
}