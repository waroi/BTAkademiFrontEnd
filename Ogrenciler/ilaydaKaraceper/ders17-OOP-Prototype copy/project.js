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
    storage.clearFilmsFromStorage(newFilm); // yorum satırı
    ui.displayMessage("Film başarılı bir şekilde eklendi", "success");
  }
  e.preventDefault();
}
function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    ui.displayMessage("Film silme başarılı", "success");
  }
}