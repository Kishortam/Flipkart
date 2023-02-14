//promises :
//1) asynchronomous : in this, the task happens one after one
//2) synchronomous : in this, the task can delay or set timeout, so can task happens after specific time.


console.log('Task 1');
setTimeout(() => {
    console.log('this task2 is happened after 2 second');
}, 2000);
console.log('Task 3');
console.log('Task 4');
setTimeout(() => {
    console.log('this task5 is happened after 5 seconds')
}, 5000);

// example
// function sendEmail(){
//     console.log('send email to the user!')
// }

// function register(){
//     console.log('registration processed!');
    
//     let registrationSuccessful = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('registration successful!');
//             resolve();
//         },2001);
//     }).then(()=>{
//         sendEmail()
//     })
// }

function sendEmail(){
    console.log('send email to user!');
}
function register(){
    console.log('registration processed!');

    let registrationSuccessful = new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('registration successful');
            resolve();
        }, 3000);
    }).then(()=>{
        sendEmail()
    })
}

//
console.log('task 1')
setTimeout(() => {
    console.log('task 2')
}, 5000);
console.log('task 3')
console.log('task 4')
console.log('task 5')
console.log('task 6')
console.log('task 7')

//

function sendReceipt(){
    console.log('send transaction receipt to user')
}

function paid(){
    console.log('Transaction processed');
    let transactionSuccessful = new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Transaction Successful');
            resolve();
        }, 1000);
        
    }).then(()=>{
        sendReceipt()
    })
}

//
function AdmissionForm(){
    console.log('Join class from tomorrow!!')
}

function admission(){
    console.log('verifying admission form');

    let admissionSuccess = new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Yay!! Admission Succeful')
            resolve();
        }, 5000);
    }).then(()=>{
        AdmissionForm()
    })
}