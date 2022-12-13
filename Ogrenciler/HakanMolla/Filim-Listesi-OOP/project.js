const form = document.getElementById("film-Form");
const filmAdiElement=document.getElementById("filmAdi");
const yonetmenElement=document.getElementById("yonetmen");
const filmTuruElement=document.getElementById("filmTuru");
const filmYilielement=document.getElementById("filmYili");
const filmPuanElement=document.getElementById("filmPuan");
const afisUrlElement=document.getElementById("afisUrl");
const filmListDel=document.getElementById("cards");
const onizlepicture = document.getElementById("onizle");





eventListeners();

function eventListeners(){

  form.addEventListener("submit",addFilm);
  filmListDel.addEventListener("click",filmDelete);
  document.addEventListener("DOMContentLoaded", loadAllFilms); 
  afisUrlElement.addEventListener("keyup",onizlemepic); 

}
function loadAllFilms() {
  
  let filmler = Storage.getFilmsFromStorage();
  filmler.forEach((film) => UI.addFilmToUI(film));
}

function onizlemepic(e){
  let onizleresim=document.querySelector("#resim");
  onizlepicture.setAttribute("src",afisUrlElement.value)
}

function addFilm(e){
  e.preventDefault();

  const filmAdi=filmAdiElement.value;
  const yonetmen=yonetmenElement.value;
  const filmTuru=filmTuruElement.value;
  const filmYili=filmYilielement.value;
  const filmPuan=filmPuanElement.value;
  const afisUrl=afisUrlElement.value;

  if(filmAdi ==="" || yonetmen ==="" || filmTuru ==="" || filmYili ===""|| filmPuan ==="" || afisUrl ===""){
    console.log("Lütfen tüm alanları doldurunuz")

  }else{
    const newFilm= new Film(filmAdi,yonetmen,filmTuru,filmYili,filmPuan,afisUrl)
    UI.addFilmToUI(newFilm)
    Storage.addFilmToStorage(newFilm)
    UI.clearInputs();
  }
}

function filmDelete(e){
 const filmAdi= e.target.parentElement.querySelector(".film-adi").textContent;

  if(e.target.id==="filmDelete"){
    UI.deleteFilmFromUI(e);
    Storage.deleteFilmsFromStorage(filmAdi);

   }

}