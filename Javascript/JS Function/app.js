function grinder(veges){
    console.log('we are grinding..', veges)
}

grinder('tomato')
grinder('onion')
grinder('capsicum')
grinder()

//ex.1

function earbud(brand){
    console.log('we are listening on', brand)
}

earbud('noise')
earbud('jbl')
earbud()
earbud('boat')

function numbergame(num1, num2){
    console.log(num1 + num2)
    console.log(num1 * num2)
    console.log(num1 - num2)
    console.log(num1 / num2)
}
numbergame(2,3)
numbergame(4,5)

//ex.1

function combinations(veg1, veg2){
    console.log(veg1,veg2)
}
combinations('onion', 'tomato')

//
function add(numb1, numb2){
    return(numb1 + numb2)
}
var a = 2;
let b = 4;
const sum = add(a,b);

console.log('the sum is:', sum)

//
function sqr(n){
    return n*n
}
let result = sqr(5)
console.log(result)

//
let c = 3
var d = 2
const e = 10

function sqr(){
    console.log(c)
}
 sqr()

 //arrow functions => es6

//  cube = (n)=> {
//     console.log(n*n*n)
//  }

//  cube(3)
//  cube(5)

 //
 dube = (n)=> n*n*n;

 let total = dube(6)
 console.log(total)