// function split(){
//     let friends = document.getElementById('friends').value;
//     let amount = document.getElementById('amount').value;
//     let bill = (amount / friends);

//     document.getElementById('result').innerHTML = bill
// }

function split1(){
    let friends = document.getElementById('friends').value;
    let amount = document.getElementById('amount').value;
    let total = (amount / friends);

    document.getElementById('result1').innerHTML = total
}

function cost(){
    let taxable = document.getElementById('taxable').value;
    let interest = document.getElementById('interest').value;
    let cost = (taxable * interest / 100)
    let end = (taxable + cost)

    document.getElementById('tax').innerHTML = cost
    document.getElementById('including').innerHTML = end
}