const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

const ui = new UI();
const storage = new Storage();
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm);
  cardbody.addEventListener("click", deleteFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  clear.addEventListener("click", clearAll);
}
function clearAll(e) {
  ui.cleatAllFilmsFromUI();
  storage.deleteFilmsFromStorage();
}
function loadAllFilms() {
  let filmler = storage.getFilmsFromStorage();
  filmler.forEach((film) => ui.addFilmToUI(film));
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    ui.displayMessage("Tüm alanları doldrurun.", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessage("Film başarılı bir şekilde eklendi", "success");
  }
  e.preventDefault();
}
function deleteFilm(e) {
  filmAdi =
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent;

  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(filmAdi);
    ui.displayMessage("Film silme başarılı", "success");
  }
}
