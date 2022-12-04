function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.getFilmsFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

Storage.prototype.deleteFilmFromStorage = function (e) {
  let films = this.getFilmsFromStorage();
  let filmTitle = e.toLocaleLowerCase();
  films.forEach((film, index) => {
    console.log(film);

    if (film.title === filmTitle) {
      films.splice(index, 1);
    }
    localStorage.setItem("films", JSON.stringify(films));
    // console.log(array);
  });
};
Storage.prototype.deleteFilmsFromStorage = function () {
  localStorage.removeItem("films");
};
