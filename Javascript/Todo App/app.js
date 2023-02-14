// let today = new Date();
// let options = {month: 'long', day:'numeric', year:'numeric'}
// console.log(today.toLocaleDateString('en',options))

// let todos = []

// function addTodo(){
//     let title = document.getElementById('title').value;
//     let desc = document.getElementById('desc').value;
//     let dueDate = document.getElementById('dueDate').value;
    
//     let temptodoObjects = {
//         title: title,
//         desc:desc,
//         dueDate:dueDate,
//     }
//     todos.push(temptodoObjects)
//     console.log(todos)
// }

let todos = [];

function checkNoTodo(){
    if(todos.length == 0){
        let notodo = document.getElementById('no-todo');
        notodo.classList.remove('d-none');
        notodo.classList.add('no-todo')
    }
    else{
        let notodo = document.getElementById('no-todo');
        notodo.classList.remove('no-todo');
        notodo.classList.add('d-none')
    }
}
function makeInputBlank(){
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
}
function renderTodos(){
    let todoContainer = document.getElementById('todoContainer');
    todos.map((todo)=>{
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-done');

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content')

        todoContainer.appendChild(todoDiv);
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(contentDiv);
    })
}

function addTodo(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let dueDate = document.getElementById('dueDate').value;

    let temptodoObjects = {
        title:title,
        desc:desc,
        dueDate:dueDate,
    }
    todos.push(temptodoObjects)

    console.log(todos);
    checkNoTodo();
    makeInputBlank();
}

