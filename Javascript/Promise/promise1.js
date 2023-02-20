function sendTicket(){
    console.log('Send Booked Ticket Print');
}

function bookTicket(){
    console.log('Checking if seats are available');
    let ticketConfirm = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log('Seats Confirmed');
            resolve();
        }, 2000);
    }).then(()=>{
        sendTicket()
    })
}

function confirmOrder(){
    
    setTimeout(() => {
        console.log('Enjoy your meal with free delivery');
        let delivered = document.getElementById('delivered'); 
        delivered.innerText = 'Enjoy your meal with free delivery';
    }, 6000);
}

function orderFood(){
    console.log('Food is Preparing');
    let Prepare = document.getElementById('prepare');
    Prepare.innerText = 'order is preparing';

    let foodReady = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log('Delivery is on the way');
            let onway = document.getElementById('onway');
            onway.innerText = 'delivery is on the way';
            resolve();
        }, 4000);
    }).then(()=>{
        confirmOrder()
    })
}