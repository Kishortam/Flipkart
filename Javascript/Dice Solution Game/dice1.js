function spin(){
    let numbersgame = Math.floor(Math.random()*6);
    let value = document.getElementById('value');

    value.innerText = ''
    let dice = document.getElementById('dice');
    dice.classList.add('animation1');

    setTimeout(() => {
        dice.classList.remove('animation1');
        value.innerText = numbersgame
    }, 1000);
}