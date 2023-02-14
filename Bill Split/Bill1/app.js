
function split(){
    let amount = document.getElementById('amount').value;
    let friends = document.getElementById('friends').value;
    
    let splitAmount = amount / friends;

    document.getElementById('result').innerHTML = splitAmount
}

function split1(){
    let amount1 = document.getElementById('amount1').value;
    let friends1 = document.getElementById('friends1').value;
    let finalAmount = amount1 / friends1;

    document.getElementById('perPerson').innerHTML = finalAmount
}

function split2(){
    let friends = document.getElementById('friends2').value;
    let amount = document.getElementById('amount2').value;
    let result = amount / friends;

    document.getElementById('result2').innerHTML = result
}
