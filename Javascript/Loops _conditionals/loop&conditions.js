//condition = if & else


// if the persons age is above 18, he is eligible to vote, if not, he is not eleigible to vote.
let age = 45;

if(age>18)
  console.log('eligible to vote');
else
  console.log('not eligible to vote')

  // if the persons age is equal to or above 18, he is eligible to vote, if not, he is not eleigible to vote.

  let ageis = 17;
  if(ageis>=18)
    console.log('eligible to vote')
    else
    console.log('not eligible')

 //if tv is equal to or more than 18000 and equal to 25000, we will buy tv, else not

 let tv = 17000;
// let tv = prompt('Enter an Amount')
if(tv>=18000){
    if(tv<=25000){
        console.log('we will buy a tv')
    }
    else{
        console.log('we dont buy a tv, price is high')
    }
}
else{
    console.log('very cheap')
}

//multiple condition

let forecast = 'cold'

if(forecast == 'sunny')
console.log('wear normal clothes');
else if(forecast=='rainy')
console.log('wear raincoat');
else if(forecast=='cold')
console.log('wear jacket');
else{
    console.log('error')
}

//ternary operator
let salary = 14000;
salary>=10000 ? console.log('im doing a job') : console.log('salary is very low')

let qualification = 10
qualification >=11 ? console.log('you are hired') : console.log('qualifiacation is low')


//loop
for (let index = 0; index < 10; index++) {
    console.log('kishor')
    
}

for (let index = 1; index <=10; index++) {
    console.log(index)
    
}
// let number = prompt('Enter a number')
for (let index = 2; index <=20; index++) {
    console.log(index*2)
    
}
let numbers = 12
if (numbers%2==0){
    console.log(numbers,"is even");
}
else{
    console.log(numbers,"is odd");
}

//loop2

for (let index = 1; index <=10; index++) {
    console.log('index')
}
//
for (let index = 1; index < 11; index++) {
    console.log(index*2)  
}
//
for (let index = 1; index < 11; index++) {
    console.log(index*5)
    
}
//
for (let index = 1; index <=10; index++) {
    console.log(index + 2)
    
}
//
for (let index = 1; index <=10; index++) {
    if(index%2 == 0){
        console.log(index, 'even')
    }
    else{
        console.log(index, 'odd')
    }
}