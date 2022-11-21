const form = document.getElementById("frmToDo");
const txtTodo = document.getElementById("txtToDo");
const txtSearch = document.getElementById("txtToDoSearch");
const lstToDo = document.getElementById("lstToDo");
const lstCard = document.getElementById("cardList");
const btnClear = document.getElementById("btnClear");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addToDo);
  lstCard.addEventListener("click", deleteToDo);
  btnClear.addEventListener("click", clearAllList);
  txtSearch.addEventListener("keyup", searchToDo);
}

function addToDo(e) {
  const newToDo = txtTodo.value;
  if (newToDo === "") {
    console.log("Lütfen yapılacak bir şey girin!");
  } else {
    addToDoToUI(newToDo);
  }
  e.preventDefault();
}

function addToDoToUI(newToDo) {
  const listItem = document.createElement("li");
  const deleteItem = document.createElement("a");

  deleteItem.href = "#";
  deleteItem.innerHTML = "<i class='fa-solid fa-trash-can'>";
  deleteItem.className = "delete-item";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newToDo));
  listItem.appendChild(deleteItem);
  lstToDo.appendChild(listItem);
  txtTodo.value = "";
}

function deleteToDo(e) {
  if (e.target.className === "fa-solid fa-trash-can") {
    e.target.parentElement.parentElement.remove();
  }
}

function clearAllList() {
  while (lstToDo.firstElementChild != null) {
    lstToDo.removeChild(lstToDo.firstElementChild);
  }
}

function searchToDo() {
  let li = document.getElementsByTagName("li");
  let search = txtSearch.value.toLowerCase();
  for (let i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.indexOf(search) > -1) {
      li[i].className = "list-group-item d-flex justify-content-between";
    } else {
      li[i].className = "d-none";
    }
  }
}
