// Event Listner : use id name and then convert it into function.
let btn = document.getElementById('btn');
btn.addEventListener('click', changeColor)

function changeColor(){
    // let butn1 = document.getElementById('butn1');
    btn.style.backgroundColor = 'blueviolet'
}

//to get detail of a particular element by id name
let heading = document.getElementById('heading');
heading.addEventListener('click', details)

function details(e){
    console.log(e)
    console.log(e.target.baseURI)
}

//new dice

function rollit(){
    let randomNumber =Math.floor(Math.random()*6);
    let number = document.getElementById('number');
    number.innerText =''
    let dice = document.getElementById('dice');
    dice.classList.add('anime');

    setTimeout(() => {
        dice.classList.remove('anime')
        number.innerText = randomNumber
    }, 1002);
}

//second example

let butn1 = document.getElementById('butn1');
butn1.addEventListener('click', roll);

function roll(){
    let anotherNumber = Math.floor(Math.random()*6);
    let dicevalue = document.getElementById('dicevalue');
    diceValue.innerText = ''

    let ludo = document.getElementById('ludo');
    ludo.classList.add('animate');

    setTimeout(() => {
        ludo.classList.remove('animate');
        diceValue.innerText = anotherNumber
    }, 1002);
}

//
let head11 = document.getElementById('head1');
head11.addEventListener('click', getDetail)

function getDetail(e){
    console.log(e)
    head11.style.color = 'blue'
}
