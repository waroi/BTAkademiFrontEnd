function Storage() {}

Storage.prototype.addFilmToLocal = function (newFilm) {
    let filmlist = this.getFilmsFromStorage(); 
    filmlist.push(newFilm);
    localStorage.setItem("filims",JSON.stringify(filmlist))
   
  };

  Storage.prototype.getFilmsFromStorage=function(){
    let filims;
    if(localStorage.getItem("filims")===null){
        filims=[];
    }else{
        filims=JSON.parse(localStorage.getItem("filims"))
    }
  return filims
  };

  

