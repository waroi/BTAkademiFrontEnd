const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm);
  cardbody.addEventListener("click", deleteFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  clear.addEventListener("click", clearAll);
}
function clearAll(e) {
  UI.cleatAllFilmsFromUI();
  Storage.deleteFilmsFromStorage();
}
function loadAllFilms() {
  let filmler = Storage.getFilmsFromStorage();
  filmler.forEach((film) => UI.addFilmToUI(film));
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    UI.displayMessage("Tüm alanları doldrurun.", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.displayMessage("Film başarılı bir şekilde eklendi", "success");
  }
  e.preventDefault();
}
function deleteFilm(e) {
  filmAdi =
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent;

  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(filmAdi);
    UI.displayMessage("Film silme başarılı", "success");
  }
}
