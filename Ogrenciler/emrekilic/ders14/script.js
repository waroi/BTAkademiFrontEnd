const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");



eventListeners();
function eventListeners() {
    form.addEventListener("submit", addTodo);
    clearButton.addEventListener("click", clearAllTodos);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    document.addEventListener('DOMContentLoaded', loadAllTodos);

}






function addTodo(e) {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        console.log("Bir todo giriniz.");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);

        console.log("Todo Başarıyla Eklendi");
    }

}
function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

}
function clearAllTodos() {
    // todoList.innerHTML = ""; 
    while (todoList.firstElementChild != null) {

        todoList.removeChild(todoList.firstElementChild);

    }

}

function deleteTodo(e) {
    console.log(e.target);
    if (e.target.className === "fa fa-remove") {

        e.target.parentElement.parentElement.remove();


    }

}
function filterTodos(e) {
    const filterText = filter.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    // console.log(listItems);




    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLocaleLowerCase();
        if (text.indexOf(filterText) > -1) {
            listItem.className = "list-group-item d-flex justify-content-between"; //TODO: burayı düzenle
        } else {
            listItem.className = "d-none";
        }
    });

}

function addTodoToStorage(newTodo) {
    let listFromStorage = getTodosFromStorage();

    localStorage.setItem('todoList', JSON.stringify(listFromStorage));
}

function getTodosFromStorage() {
    let listFromStorage;
    if (localStorage.getItem('todoList') === null) {
        listFromStorage = [];
    } else {
        listFromStorage = JSON.parse(localStorage.getItem('todoList'));
    }

    return listFromStorage;
}

function loadAllTodos() {
    const list = getTodosFromStorage();

    list.forEach(function (item) {
        addTodoToUI(item);
    });
}
