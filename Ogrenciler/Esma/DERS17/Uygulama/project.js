const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const trID = document.querySelectorAll("tr");
const ui = new UI();
const str = new Storage()
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm);
  cardbody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
  document.addEventListener("DOMContentLoaded", getAllFilms)

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
    str.addFilmToStorage(newFilm);
    ui.displayMessage("Film başarılı bir şekilde eklendi", "success");
  }

  e.preventDefault();
}
function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling)
    // ui.deleteFilmFromUI(e.target);
    // // storage.deleteFilmFromStorage()
    // ui.displayMessage("Film silme başarılı", "success");
  }
}
function clearAllFilms(){
  str.clearAllFromStorage()
}

function getAllFilms(){
  // let films = str.getFilmFromStorage()
  // ui.addFilmToUI(films)
}