let todoTasksText = [];
let todoTaskStatus = [];
let todoList = document.getElementById("todo-list");


function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTaskStatus.push(false);
        newTask.value = "";
        console.log(todoTasksText);
        updateTodoList();
    }
}



function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    });
    
}



function moveUp(index) {
    console.log(index)
    let newIndex = index + 1    
    console.log("button move up");
}

 

function createNewTodoItemElement(task, index) {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTaskStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);


    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };

    let moveUpButtonElement = document.createElement("input");
    moveUpButtonElement.type = "button";
    moveUpButtonElement.value = "Up";
    moveUpButtonElement.onclick = function () {
        moveUp(index);
            }; 

    newTodoTaskElement.appendChild(completeButtonElement);

    return newTodoTaskElement;
}

  



function toggleComplete(index) {
    // if the todo is not complete
    if (todoTaskStatus[index] == false) {
        // set the todo to complete
        todoTaskStatus[index] = true;
    } else {
        // Else the todo is already complete so set it to incomplete
        todoTaskStatus[index] = false;
    }
    updateTodoList();
}

updateTodoList();



