const req = new Request("https://jsonplaceholder.typicode.com/photos");
const frmNewPhoto = document.getElementById("frmNewPhoto");

// const request = new Request("https://jsonplaceholder.typicode.com/photos");

function showAllPhotos() {
  req.get();
}

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", showAllPhotos);
  document.addEventListener("click", showModal);
  document.addEventListener("click", deletePhoto);
  document.addEventListener("paste", updatePhoto);

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
    req.delete(
      e.target.parentElement.parentElement.parentElement.parentElement
        .previousSibling.firstChild.id
    );
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
function updatePhoto(e) {
  const updateUrl = e.clipboardData.getData("text");
  if (e.target.className == "form-control imgUrl") {
    e.target.parentElement.parentElement.parentElement.previousSibling.firstChild.src =
      e.clipboardData.getData("text");
    req.put(
      Number(
        e.target.parentElement.parentElement.parentElement.previousSibling
          .firstChild.id
      ),
      updateUrl
    );
  }
}

function showModal(e) {
  if (e.target.className === "card-img") {
    UI.createModalUI(e.target.id, e.target.alt, e.target.src);
  }
}
