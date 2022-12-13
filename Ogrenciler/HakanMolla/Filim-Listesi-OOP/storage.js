class Storage{

  static addFilmToStorage(newFilm){
  const films =this.getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films",JSON.stringify(films));


  }

static getFilmsFromStorage(){
  let films;
  if(localStorage.getItem("films")=== null){
    films=[];
  }else {
    films=JSON.parse(localStorage.getItem("films"))
  }
  return films
}

static deleteFilmsFromStorage(e){
  let films =this.getFilmsFromStorage();
  let FilmTitle = e.toLocaleLowerCase();
 
  films.forEach((film,index)=>{
    console.log(FilmTitle);
    if(film.filmAdi.toLocaleLowerCase() === FilmTitle.trim()){
      films.splice(index, 1);

    }
    localStorage.setItem("films", JSON.stringify(films));
  })
}

}