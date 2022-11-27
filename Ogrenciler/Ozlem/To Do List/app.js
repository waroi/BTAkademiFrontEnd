const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

todoButton.addEventListener("click", addTodo);


function addTodo(e){
    e.preventDefault();

    const isEmpty = str => !str.trim().length;

    if(isEmpty(todoInput.value)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 1500);

        todoInput.value = "";

    } else{
        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 1500);

         const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // inputun icine yazilanlari todo liste aktardik
    todoList.appendChild(todoDiv);

    todoInput.value = "";



    console.log(todoDiv);

    }


   
}