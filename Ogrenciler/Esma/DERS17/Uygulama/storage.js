function Storage() {}

Storage.prototype.getFilmFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmFromStorage(); //array listes,ne aldık
  films.push(newFilm); //sonra array'e bir değer atayabilmek için push metodu kullanıyoruz
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.clearAllFromStorage = function () {
  localStorage.removeItem("films");
};

Storage.prototype.deleteFilmFromStorage = function (filmindex) {
  let films = this.getFilmFromStorage();
  films.map(function (film, index) {
    if (index === filmindex) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films))
};
