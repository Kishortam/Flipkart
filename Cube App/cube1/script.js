function cube(){
    let value = document.getElementById('value').value;
    let cubeResult = value * value * value; 

    document.getElementById('result').innerHTML = cubeResult
}

function plus(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let addition = (number1) + (number2);

    document.getElementById('add').innerHTML = addition;
}