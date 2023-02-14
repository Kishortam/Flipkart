function joined(){
    // console.log('joined function called')
    let title = document.getElementById('title');
    title.innerText = 'Thanks for Subscribing the Amazon Prime';
    let btn1 = document.getElementById('btn1');
    // btn1.style.backgroundColor = 'blueviolet'
    btn1.style.display = 'none'
    
}
function shop(){
    let noise = document.getElementById('noise');
    noise.innerText = 'Thanks for shopping'
    let butn = document.getElementById('butn');
    butn.style.display = 'none'
}

function download(){
    let msg = document.getElementById('msg');
    msg.innerText = 'Download Started';
    let btn2 = document.getElementById('btn2');
    btn2.style.display ='none'

}

//cube app
function cube(){
    let number = document.getElementById('number').value;
    let result = number*number*number;
    document.getElementById('result').innerText = result;
}

//bill split
function split(){
    let amount = document.getElementById('amount').value;
    let friends = document.getElementById('friends').value;
    let bill = (amount / friends);
    document.getElementById('divide').innerHTML = bill;
}