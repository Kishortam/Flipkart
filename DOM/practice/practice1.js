function play(){
    let action = document.getElementById('action')
    action.innerText = 'Feel the Music';
    let playit = document.getElementById('playit')
    playit.style.display = 'none';
}

function cube(){
    let value = document.getElementById('value').value;
    let result = value*value*value;
    document.getElementById('result').innerText = result;
}

function download(){
    let heading = document.getElementById('heading');
    heading.innerText = 'Download has started';
    heading.style.fontSize = '30px'
    heading.style.fontFamily = 'roboto'
    heading.style.textDecorationLine = 'underline'

    let box = document.getElementById('box');
    box.style.backgroundColor = 'pink'
    box.style.color = 'black'
}