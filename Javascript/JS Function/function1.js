function fashion(clothes){
    console.log('i have bought', clothes)
}
fashion('shirt')
fashion('jeans')
fashion('t-shirt')
fashion('cap')
//
function stationary(writing){
    console.log(writing)
}
stationary('pen')
stationary('pencil')
stationary('rubber')
stationary('ruler')
//
function mobiles(brand){
    console.log('im using a', brand, 'mobile')
}
mobiles('oppo')
mobiles('vivo')
mobiles('apple')
mobiles('samsung')
//
function gameofnumbers(num1, num2){
    console.log(num1+num2)
    console.log(num1*num2)
    console.log(num1-num2)
    console.log(num1/num2)
}
gameofnumbers(5,2)

//

let a = 5;
let b = 2;
var sum = add(a,b)

function add(num1,num2){
    return(num1 + num2)
}
console.log(sum)