const form = document.getElementById("frmToDo");
const txtTodo = document.getElementById("txtToDo");
const txtSearch = document.getElementById("txtToDoSearch");
const lstToDo = document.getElementById("lstToDo");
const lstCard = document.getElementById("cardList");
const btnClear = document.getElementById("btnClear");
const tarih = new Date();
const saat = `${tarih.getHours()}:${tarih.getMinutes()}`;

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
    showInfoDialog("HATA", "Alanlar boş bırakılamaz");
    console.log("Lütfen yapılacak bir şey girin!");
  } else {
    addToDoToUI(newToDo);
    showInfoDialog("Başarılı", "Todo başarıyla eklendi.");
  }
  e.preventDefault();
}

function addToDoToUI(newToDo) {
  const listItem = document.createElement("li");
  const deleteItem = document.createElement("a");

  deleteItem.href = "#";
  deleteItem.innerHTML = "<i class='fa-solid fa-trash-can'>";
  deleteItem.className = "delete-item text-danger";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newToDo));
  listItem.appendChild(deleteItem);
  lstToDo.appendChild(listItem);
  txtTodo.value = "";
}

function deleteToDo(e) {
  if (e.target.className === "fa-solid fa-trash-can") {
    e.target.parentElement.parentElement.remove();
    showInfoDialog("Başarılı", "Silindi!");
  }
}

function clearAllList() {
  while (lstToDo.firstElementChild != null) {
    lstToDo.removeChild(lstToDo.firstElementChild);
  }
  localStorage.clear();
}

function searchToDo(e) {
  // let li = document.getElementsByTagName("li");
  // let search = txtSearch.value.toLowerCase();
  // for (let i = 0; i < li.length; i++) {
  //   let txtValue = li[i].textContent || li[i].innerText;
  //   if (txtValue.indexOf(search) > -1) {
  //     li[i].className = "list-group-item d-flex justify-content-between";
  //   } else {
  //     li[i].className = "d-none";
  //   }
  // }

  // 2.YONTEM
  const txtSearch = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(txtSearch) !== -1) {
      listItem.className = "d-none";
    } else {
      listItem.className = "list-group-item d-flex justify-content-between";
    }
  });
}

function showInfoDialog(title, body) {
  const dialogInfo = document.getElementById("dialogInformation");
  const dialogTitle = document.getElementById("infoHead");
  const dialogTime = document.getElementById("infoTime");
  const dialogBody = document.querySelector(".toast-body");
  dialogTitle.innerText = title;
  dialogTime.innerText = saat;
  dialogBody.innerText = body;
  const toast = new bootstrap.Toast(dialogInfo);
  toast.show();
}

//Local Storage
// localStorage.setItem("DenemeKey", "DenemeValue");
// const lst = localStorage.getItem("DenemeKey");
// console.log(lst);

// const arr = [1, 2, 3];
// localStorage.setItem("array", JSON.stringify(arr));

// const gelenArray = JSON.parse(localStorage.getItem("array"));
// console.log(gelenArray);

// document.addEventListener("DOMContentLoaded", loadAllToDos);
