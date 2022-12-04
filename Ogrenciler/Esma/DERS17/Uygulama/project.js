const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const filmara = document.getElementById("textara");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm);
  cardbody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
  document.addEventListener("DOMContentLoaded", getAllFilms);
  filmara.addEventListener("keyup", filterFilms);
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
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessage("Film silme başarılı", "success");
  }
}
function clearAllFilms() {
  Storage.clearAllFromStorage();
}

function getAllFilms() {
  let films = Storage.getFilmFromStorage();
  console.log(films);
  films.map(function (film) {
    UI.addFilmToUI(film);
  });
}
function filterFilms() {
  UI.filterFilmsUI();
}
