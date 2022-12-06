class Storage {
  static getFilmFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  static addFilmToStorage(newFilm) {
    let films = this.getFilmFromStorage(); //array listes,ne aldık
    films.push(newFilm); //sonra array'e bir değer atayabilmek için push metodu kullanıyoruz
    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFromStorage() {
    localStorage.removeItem("films");
  }

  static deleteFilmFromStorage(filmtitle) {
    let films = this.getFilmFromStorage();
    films.map(function (film) {
      if (film.title === filmtitle) {
        films.splice(film.title, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }
}
