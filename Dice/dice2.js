function letsDice(){
    let numbersgame = Math.floor(Math.random()*6);
    let value = document.getElementById('value');

    value.innerText = '';

    let dice = document.getElementById('dice');
    dice.classList.add('animation2');

    setTimeout(() => {
        dice.classList.remove('animation2');
        value.innerText = numbersgame
    }, 1000);
}

function spin(){
    let randomnum = Math.floor(Math.random()*6);
    let random = document.getElementById('random');

    random.innerText = '';

    let dice1 = document.getElementById('dice1');
    dice1.classList.add('animation3');

    setTimeout(() => {
        dice1.classList.remove('animation3');
        random.innerText = randomnum;
    }, 1000);
}