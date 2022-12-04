function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};
