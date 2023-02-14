// function split(){
//     let amount = document.getElementById('amount').value;
//     let friends = document.getElementById('friends').value;
//     let result = (amount / friends);

//     document.getElementById('total').innerHTML = result
// }

function split(){
    let amount = document.getElementById('amount').value;
    let friends = document.getElementById('friends').value;

    let result = (amount / friends)

    document.getElementById('total').innerHTML = result + ' per person '
}

