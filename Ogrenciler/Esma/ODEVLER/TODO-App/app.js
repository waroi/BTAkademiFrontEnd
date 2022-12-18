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
  document.addEventListener("DOMContentLoaded", getAllToDos);
}

function addToDo(e) {
  const newToDo = {
    id: Date.now(),
    text: txtTodo.value,
  };

  if (newToDo === "") {
    showInfoDialog("HATA", "Alanlar boş bırakılamaz");
    console.log("Lütfen yapılacak bir şey girin!");
  } else {
    todo
      .postToDo(newToDo)
      .then((data) => addToDoToUI(data.text))
      .catch((err) => console.log(err));
    showInfoDialog("Başarılı", "Todo başarıyla eklendi.");
  }
  e.preventDefault();
}

function addToDoToUI(newToDo) {
  const listItem = document.createElement("li");
  const deleteItem = document.createElement("a");
  console.log(newToDo.id);
  deleteItem.href = "#";
  deleteItem.innerHTML = `<i id="${newToDo.id}" class='fa-solid fa-trash-can'></i>`;
  deleteItem.className = "delete-item text-danger";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newToDo));
  listItem.appendChild(deleteItem);
  lstToDo.appendChild(listItem);
  txtTodo.value = "";
}

function deleteToDo(e) {
  if (e.target.className === "fa-solid fa-trash-can") {
    todo.removeToDo(e.target.id);
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

  // 2.YONTEM
  // const txtSearch = e.target.value.toLowerCase();
  // const listItems = document.querySelectorAll(".list-group-item");

  // listItems.forEach(function (listItem) {
  //   const text = listItem.textContent.toLowerCase();
  //   if (text.indexOf(txtSearch) !== -1) {
  //     listItem.className = "d-none";
  //   } else {
  //     listItem.className = "list-group-item d-flex justify-content-between";
  //   }
  // });
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
class Todo {
  constructor(url) {
    this.url = url;
  }

  async getToDo() {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error(`Bir Hata Oluştu. ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
  async postToDo(data) {
    const res = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Bir Hata Oluştu. ${res.status}`);
    }
    return data;
  }
  async removeToDo(id) {
    const res = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Bir Hata Oluştu. ${res.status}`);
    }
  }
}

const todo = new Todo("http://localhost:3000/todos");

function getAllToDos() {
  // addToDoToUI()
  todo
    .getToDo()
    .then((data) => {
      data.forEach((element) => {
        addToDoToUI(element.text);
      });
    })
    .catch((err) => console.log(err.message));
}
