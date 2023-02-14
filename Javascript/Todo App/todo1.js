let todo = []

function task(){
    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    let day = document.getElementById('day').value;

    let temptodos = {
        subject:subject,
        description:description,
        day:day,
    }
    todo.push(temptodos)
    
    console.log(todo)
}

//2nd exampple