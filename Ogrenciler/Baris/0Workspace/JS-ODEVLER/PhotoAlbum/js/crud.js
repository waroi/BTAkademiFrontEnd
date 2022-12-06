class Request {
  constructor(url) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }
  get() {
    //id,title,url 'leri return olarak almak için parametre tanımla
    //birde öyle dene
    this.xhr.open("GET", this.url);
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        const parsedList = JSON.parse(this.xhr.responseText);
        parsedList.forEach((item) => {
          if (item.albumId === 1) {
            UI.showToPhotoUI(item.id, item.title, item.url);
          }
        });
      }
    };
    this.xhr.send();
  }
  post(item) {
    this.xhr.open("POST", this.url);
    this.xhr.send(JSON.stringify(item));
  }
  put(id, item) {
    this.xhr.open("PUT", `${this.xhr.url}/${id}`);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.send(JSON.stringify(item));
  }
  delete(id) {
    this.xhr.open("DELETE", `${this.url}/${id}`);
    this.xhr.send();
  }
}

//
//
//
//
const req = new Request("https://jsonplaceholder.typicode.com/photos");
const frmNewPhoto = document.getElementById("frmNewPhoto");
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", showAllPhotos);
  document.addEventListener("click", showModal);
  document.addEventListener("click", deletePhoto);
  frmNewPhoto.addEventListener("submit", addPhoto);
}
function addPhoto(e) {
  e.preventDefault();

  const textPhotoID = document.getElementById("txtPhotoID");
  const textPhotoTitle = document.getElementById("txtPhotoTitle");
  const textPhotoUrl = document.getElementById("txtPhotoUrl");

  if (
    textPhotoID.value.trim() === "" ||
    textPhotoTitle.value.trim() === "" ||
    textPhotoUrl.value.trim() === ""
  ) {
    UI.showMessage("info", "Gerekli verilerin hepsini girin");
  } else {
    const newPhoto = {
      id: textPhotoID.value.trim(),
      title: textPhotoTitle.value.trim(),
      url: textPhotoUrl.value.trim(),
    };
    req.post(newPhoto);
    UI.addPhotoToUI(newPhoto);
    UI.showMessage("success", "Ekleme işlemi başarılı!");
    textPhotoID.value = "";
    textPhotoTitle.value = "";
    textPhotoUrl.value = "";
  }
}
function deletePhoto(e) {
  if (e.target.className == "fa-solid fa-trash-can") {
    req.delete(e.target.parentElement.parentElement.nextSibling.firstChild.id);
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
function showAllPhotos() {
  req.get();
}
function showModal(e) {
  if (e.target.className === "card-img") {
    UI.createModalUI(e.target.alt, e.target.src);
  }
}
