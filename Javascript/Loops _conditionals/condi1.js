let age = 35;

if(age>=20){
    console.log('you can make marriage')
}
else{
    console.log('sorry, no marriage')
}

//condi2
let yrs = 15;
if(yrs>=18){
    console.log('you can vote')
}
else{
    console.log('dont vote')
}
//
let price = 15000;
price>=22000 ? console.log('we cant afford') : console.log('we can buy')
///
let mobile = 9000
if(mobile <=15000){
    if(mobile>=10000){
        console.log('we can buy mobile')
    }
    else{
        console.log('we cannot')
    }
}
else{
    console.log('very cheap')
}

//
let fruit = 'orange'
if(fruit == 'apple'){
    console.log('eat as itis');
}
else if(fruit == 'mango'){
    console.log('make milkshake');
}
else if(fruit == 'orange'){
    console.log('make juice');
}
else{
    console.log('dont eat');
}

//loop

for (let index = 0; index < 10; index++) {
    console.log('wow')
    
}

for (let index = 1; index <=10; index++) {
    console.log(index + index)
    
}

for (let index = 2; index <= 10; index++) {
    console.log(index * index);
    
}

for (let index = 1; index <=10; index++) {
    console.log(index * 5)
    
}

function fun(a,b){
    if(b==0)
    return a;
    return fun(b, a % b);
    
}
var ans = fun(100,2000);
console.log(ans)