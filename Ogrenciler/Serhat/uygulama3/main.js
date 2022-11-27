const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-todos");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  secondCardBody.addEventListener("click", deleteTodo);
  clearButton.addEventListener("click", clearAllTodos);
  filter.addEventListener("keyup", filterTodos);
  document.addEventListener("DOMContentLoaded", loadAllTodos);

}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  // console.log(listItems);
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLocaleLowerCase();
    if (text.indexOf(filterText) !== -1) {
      listItem.className = "list-group-item d-flex justify-content-between"; //TODO: burayı düzenle
    } else {
      listItem.className = "d-none";
    }
  });
}

function clearAllTodos() {
  // todoList.innerHTML = ""; // Yavaş çalışıyor
  while (todoList.firstElementChild != null) {
    todoList.removeChild(todoList.firstElementChild);
  }
}

function deleteTodo(e) {
  // console.log(e.target.parentElement.parentElement);
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    console.log("Todo Başarıyla Eklendi");
  }
  e.preventDefault();
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

// // Local Storage
// localStorage.setItem("DenemeKey", "DenemeValue");
// const lst = localStorage.getItem("DenemeKey");
// console.log(lst);




function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
    let todos=getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodos(){
let todos=getTodosFromStorage();
todos.forEach(function(todo){
    addTodoToUI(todo);
})

}
