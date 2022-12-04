function Storage() {}
Storage.prototype.getFilmFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = new Array();
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.deleteFilmFromStorage = function (e) {};
