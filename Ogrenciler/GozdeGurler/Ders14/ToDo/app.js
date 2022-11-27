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
  filter.addEventListener("keyup", filterTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodos);
}

function clearAllTodos() {
  // todoList.innerHTML = ""; // Yavaş çalışıyor
  localStorage.removeItem("todos");
  while (todoList.firstElementChild != null) {
    todoList.removeChild(todoList.firstElementChild);
  }
}

function deleteTodo(e) {
  // console.log(e.target.parentElement.parentElement);
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
  }
}
function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    // ["todo1", "todo2", "todo3"];
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
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

function filterTodo(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display:none !important"); //classlist.add("d-none")
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

//Local Storage

// localStorage.setItem("denemeKey", "denemeValue");
// const lst = localStorage.getItem("denemeKey");
// console.log(lst);

// const arr = [1, 2, 3, 4];
// localStorage.setItem("array", JSON.stringify(arr));

// const gelenArray = JSON.parse(localStorage.getItem("array"));
// console.log(gelenArray);

// // localStorage.removeItem();

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// local storage'a veri yazma
function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// local storage verileri alıp sayfa açıldığında ui'a yazma
function loadAllTodos() {
  let todos = getTodosFromStorage();
  todos.map(function (todo) {
    addTodoToUI(todo);
  });
}
