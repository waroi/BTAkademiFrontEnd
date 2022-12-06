class Storage {
  getFilmFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = new Array();
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  addFilmToStorage(newFilm) {
    let films = this.getFilmFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  deleteFilmFromStorage = function (e) {};
}
