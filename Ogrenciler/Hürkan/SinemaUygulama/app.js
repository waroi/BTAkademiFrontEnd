const filmadi = document.getElementById("filmadi");
const yil = document.getElementById("yil");
const type = document.getElementById("type");
const director = document.getElementById("director");
const imageurl = document.getElementById("imageurl");
const imgafis = document.getElementById("imgafis");
const formfilm = document.getElementById("formfilm");
const divimg = document.getElementById("divimg");
const divcard = document.getElementById("divcard");
const divbutton = document.getElementById("divbutton");

//Tüm elemanlar id'si ile alınır.

eventListener();
function eventListener() {
  formfilm.addEventListener("submit", addtofilm);
  document.addEventListener("DOMContentLoaded", createcardUI);
}

function addtofilm(e) {
  const newFilm = {
    filmadi: filmadi.value, // (key, value-elle girdiğimiz içerik)
    yil: yil.value,
    type: type.value,
    director: director.value,
    imageurl: imageurl.value,
  }; // obje oluşturulur.

  let films = getallfilms();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
  console.log(newFilm);
  e.preventDefault(); //form submit edildikten sonra sayfa yenilenmesini önler.
}

function getallfilms() {
  let films;
  if (localStorage.getItem("films") == null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
}

//localstorage'da films olup olmadığıyla alakalı kontrol, yoksa boş array, varsa dışarı çıkar.

function createcardUI() {
  const cardimage = document.createElement("img");
  const cardheader = document.createElement("div");
  const cardbody = document.createElement("div");
  const buttonupdate = document.createElement("button");
  const buttondelete = document.createElement("button");
  let films = getallfilms();
  cardimage.className = "img-fluid rounded-start";
  cardimage.src = `"${films.map((film) => film.imageurl)}"`;
  console.log(cardimage.src);
  console.log(films.map((i) => i.imageurl));
  divimg.appendChild(cardimage);
}
