function play(){
    let message = document.getElementById('msg');
    message.innerText ='Music is started, enjoy the music';
    message.style.color = 'white';
    let butn = document.getElementById('butn1');
    butn.style.display ='none';
}

function watch(){
    let messageChange = document.getElementById('messageChange');
    messageChange.innerText = 'Movie rendering, Starts in while';
    let btn = document.getElementById('btn');
    btn.style.display = 'none';
}

function cube(){
    let number = document.getElementById('number').value;
    let cube = document.getElementById('cube')
    let cubes = number * number * number ;

    document.getElementById('result').innerHTML = cubes; 
}

function cubekaro(){
    let value = document.getElementById('value').value;
    let result1 = value * value * value;
    document.getElementById('total').innerHTML = result1;
}