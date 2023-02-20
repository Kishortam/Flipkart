let color = document.getElementById('color');
color.addEventListener('click', changeColor);

function changeColor(){
    color.style.backgroundColor = 'red';
}

let play = document.getElementById('play');
play.addEventListener('click', musicPlay);

function musicPlay(){
    let music = document.getElementById('music');
    music.innerText = 'Music is Playing';
    play.style.backgroundColor = 'teal';
    play.style.color = 'white';
}

let colorcode = document.getElementById('colorcode');
colorcode.addEventListener('click', changeText);

function changeText(){
    let text = document.getElementById('text');
    text.style.backgroundColor = 'black';
    text.style.color = 'white';
    text.style.padding = 10;
    text.style.borderRadius = 18;
}