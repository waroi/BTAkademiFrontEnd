const filmAdi = document.querySelector("#filmAdi");
const yonetmen = document.querySelector("#filmYonetmen");
const yil = document.querySelector("#filmYili");
const filmAfis = document.querySelector("#filmAfisi");
const table = document.querySelector(".table");
const buttonKaydet = document.querySelector(".kaydet");
const buttonGuncelle = document.querySelector(".guncelle");

// Events
function eventListeners() {
  buttonKaydet.addEventListener("click", addFilms);
}

eventListeners();

function addFilms(e) {
  const newFilm = filmAdi.value.trim();
  if (newFilm === "") {
    alert("Please add a new film!");
  } else {
    addFilmToUI(newFilm);
    saveLocal(newFilm);
    console.log("Film added succesfully.");
  }
  e.preventDefault();
}

function saveLocal(film) {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }

  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));
}

function lokaldenGetir() {
  let getir;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return getir;
}

function addFilmToUI(newFilm) {
  const tBody = document.querySelector(".tbody");
  const trItem = document.createElement("tr");
  const thItem = document.createElement("th");
  trItem.appendChild(thItem);
  tBody.appendChild(trItem);

  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.innerHTML = filmAdi.value;
  cell2.innerHTML = yonetmen.value;
  cell3.innerHTML = yil.value;
  cell4.innerHTML = filmAfis.value;
  return false;
  // thItem.setAttribute("scope", "row");
  // thItem.textContent = "ashdsd";

  // thItem.textContent = "1
}
