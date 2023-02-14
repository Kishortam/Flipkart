// function roll(){
//     let randomNumber = Math.floor(Math.random()*6);
//     let number = document.getElementById('number');

//     let dice = document.getElementById('dice');

//     number.innerText = ''
//     dice.classList.add('animate-dice');
//     setTimeout(()=>{
//         dice.classList.remove('animate-dice');
//         number.innerText = randomNumber;
//     },1002) 
// }

// function roll(){
//     let randomNumber = Math.floor(Math.random()*6);
//     let number = document.getElementById('number');

//     number.innerText =''
//     let dice = document.getElementById('dice');
//     dice.classList.add('animate-dice');

//     setTimeout(() => {
//         dice.classList.remove('animate-dice');
//         number.innerText = randomNumber
//     }, 1002);
// }

function roll(){
    let randomNumber = Math.floor(Math.random()*6);
    let number = document.getElementById('number');
    number.innerText =''

    let dice = document.getElementById('dice');
    dice.classList.add('animate-dice');

    setTimeout(() => {
        dice.classList.remove('animate-dice');
        number.innerText = randomNumber
    }, 1002);
}

//color change
let color = document.getElementById('change');
color.addEventListener('click', colorful)

function colorful(){
    color.style.backgroundColor = 'orangered'
}
