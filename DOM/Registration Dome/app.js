// let users = []

// function register(){
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;

//     //check if email found more than one time

//     let countEmail = users.filter((users)=>{
//         return users.email == email;
//     })

//     //storing the value to array

//     let tempUser = {
//         name : name,
//         email : email,
//     }

//     if(countEmail.length == 0){
//         users.push(tempUser);
//     }
//     else{
//         console.log('email id already exist')
//     }

//     console.log(users)
// }

let users = []

function register(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let countEmail = users.filter((users)=>{
        return users.email == email;
    })

    let tempUser = {
        name : name,
        email :email,
    }
    if(countEmail.length == 0){
        users.push(tempUser);
        // alert
        alertDiv.classList.remove('d-none');
        // alertDiv.classList.add('alert');
        alertDiv.classList.add('success');
        alertDiv.classList.remove('hide-alert');

        setTimeout(()=>{
            // alertDiv.classList.remove('alert');
            alertDiv.classList.remove('success');
            alertDiv.classList.add('hide-alert');
        }, 2000)


    }
    else{
        // alert
        alertDiv.innerHTML = 'Already registered!'
        alertDiv.classList.remove('d-none');
        alertDiv.classList.remove('hide-alert');

        alertDiv.classList.add('danger');

        setTimeout(()=>{
            // alertDiv.classList.remove('alert');
            alertDiv.classList.remove('danger');
            alertDiv.classList.add('hide-alert');
        }, 2000)
    }
    console.log(users)
}