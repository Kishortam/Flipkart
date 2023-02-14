function split(){
    let amount = document.getElementById('amount').value;
    let friends = document.getElementById('friends').value;
    let bill = (amount / friends);
    document.getElementById('result').innerHTML = bill;

}

function splitIt(){
    let amount = document.getElementById('amount1').value;
    let friends = document.getElementById('friends1').value;
    let total = (amount / friends);
    document.getElementById('result1').innerHTML = total;

    let title = document.getElementById('title');
    title.innerText = 'Share your bill with friends'

    
}