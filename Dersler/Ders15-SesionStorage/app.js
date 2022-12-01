// Buttonları Seçme
const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

// Inputları Seçmek
const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

// Eventler
add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

// SesionStorage Ekleme işlemi
function addItem() {
  sessionStorage.setItem(addkey.value, addvalue.value);
  console.log(sessionStorage.getItem(addkey.value));
}

// SesionStorage Silme işlemi
function deleteItem() {
  sessionStorage.removeItem(deletekey.value);
  console.log(deletekey.value);
}

// SesionStorage Hepsini silme işlemi
function clearItems() {
  sessionStorage.clear();
}
