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
}

function clearAllTodos() {
  // todoList.innerHTML = ""; // Yavaş çalışıyor
  while (todoList.firstElementChild != null) {
    console.log(todoList.firstElementChild);
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
  todoInput.value = '';
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

}

function filterTodo(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  console.log(listItems);
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      // Bulamadı
      listItem.setAttribute("style", "display:none !important");
    }
    else {
      listItem.setAttribute("style", "display:block");
    }
  })
}

