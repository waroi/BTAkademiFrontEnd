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

const yeniArray = [];

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
  yeniArray.push(todoInput.value);
  localStorage.setItem("addedTodos", yeniArray);
  todoInput.value = "";
}

function loadAllTodos() {
  console.log(yeniArray);
  document.getElementsByClassName("list-group-item").innerHTML =
    localStorage.getItem("addedTodos");
}

// const todoArray = [];
// todoArray.push(todoInput.value);
// console.log(todoArray);
// Local Storage
// localStorage.setItem("DenemeKey", "DenemeValue");
// const lst = localStorage.getItem("DenemeKey");
// console.log(lst);

// const arr = [1, 2, 3, 4];
// localStorage.setItem("array", JSON.stringify(arr));
// const gelenArray = JSON.parse(localStorage.getItem("array"));
// console.log(gelenArray);

//
