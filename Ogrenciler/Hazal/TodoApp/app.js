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
  document.addEventListener("DOMContentLoaded",loadAllToDos);
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
  clearLocalStorage()
  while (todoList.firstElementChild != null) {

    todoList.removeChild(todoList.firstElementChild);
  }
  
}
function clearLocalStorage (){

localStorage.removeItem("toDos");

}
function deleteTodo(e) {
  // console.log(e.target.parentElement.parentElement);
  if (e.target.className === "fa fa-remove") {
deleteTodoLocalStorage(e.target.parentElement.parentElement.textContent);
    e.target.parentElement.parentElement.remove();
  }
}
function deleteTodoLocalStorage(deleteTodo){
  arr.forEach(function(item,i){
if (item=== deleteTodo) {
  arr.splice(i,1);
}

  })
  localStorage.setItem("toDos",JSON.stringify(arr))
}
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    console.log("Todo Başarıyla Eklendi");
    addTodoLocalStorage(newTodo);
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
function getToDosFromLocalStorage(){
  let todos;
  if (localStorage.getItem("toDos")===null){
    todos = []
  } else {
    todos= JSON.parse(localStorage.getItem("toDos"))
  }
return todos;
}

function addTodoLocalStorage (newTodo) {
let arr = getToDosFromLocalStorage();
arr.push(newTodo);
localStorage.setItem("toDos",JSON.stringify(arr));


}

function loadAllToDos () {
const gelenarr = JSON.parse(localStorage.getItem("toDos"));
gelenarr.forEach(function(gelen){
  arr.push(gelen);
 addTodoToUI(gelen);
})
}
