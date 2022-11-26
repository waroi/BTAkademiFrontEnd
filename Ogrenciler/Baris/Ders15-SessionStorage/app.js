const add = document.getElementById("btnAdd");
const del = document.getElementById("btnDelete");
const clear = document.getElementById("btnClear");

//inputlar

const addKey = document.getElementById("txtAddKey");
const addValue = document.getElementById("txtAddValue");
const deleteKey = document.getElementById("txtDeleteKey");

//eventler
eventListener();
function eventListener() {
  add.addEventListener("click", addItem);
  del.addEventListener("click", deleteItem);
  clear.addEventListener("click", clearItem);
}

function addItem() {
  sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItem() {
  sessionStorage.removeItem(deleteKey.value);
}
function clearItem() {
  sessionStorage.clear();
}
