class Storage {

addFilmToStorage(newFilm) {
  let films = this.getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

getFilmsFromStorage() {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
}


clearFilmsFromStorage(){
  let films = this.getFilmsFromStorage();
  localStorage.removeItem();

};
}