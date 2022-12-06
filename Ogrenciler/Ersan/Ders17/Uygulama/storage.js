class Storage {
  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  static deleteFilmFromStorage(e) {
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
  }
  static deleteFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
