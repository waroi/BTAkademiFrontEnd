//Selector Listesi
const filmAdi = document.querySelector("#filmAdi");
const filmTuru = document.querySelector("#filmTuru");
const yonetmen = document.querySelector("#filmYonetmen");
const yil = document.querySelector("#filmYili");
const filmAfis = document.querySelector("#filmAfisi");
const puan = document.querySelector("#imdb");
const buttonKaydet = document.querySelector(".kaydet");
const buttonGuncelle = document.querySelector(".guncelle");

// Events
function eventListeners() {
  buttonKaydet.addEventListener("click", kaydetFunc);
}

eventListeners();

function kaydetFunc(e) {
  e.preventDefault();

  let filmDizi = [
    filmAdi.value,
    filmTuru.value,
    yonetmen.value,
    yil.value,
    filmAfis.value,
    puan.value,
  ];

  saveLocal(filmDizi);
  addFilmsToUI();

  //   console.log(filmAdi.value);
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

function addFilmsToUI(newFilms) {
  const tBody = document.querySelector(".tbody");
  tBody.innerHTML = `<tr>
  <th scope="row">1</th>
  <td>${filmAdi.value}</td>
  <td>${yonetmen.value}</td>
  <td>${filmTuru.value}</td>
  <td>${yil.value}</td>
  <td>${puan.value}</td>
  <td>${filmAfis.value}</td>
  <td><button class="btn btn-success">Düzenle</button></td>
</tr> `;

  thItem.setAttribute("scope", "row");
  thItem.textContent = "ashdsd";

  thItem.textContent = "1";
  const tdItem1 = document.createElement("td");
  const deneme = document.querySelector(".deneme");
  deneme.textContent = filmAdi.value;
  console.log(filmAdi.value);
  console.log(deneme.textContent);
  // listItem.className = "list-group-item d-flex justify-content-between";
  // listItem.appendChild(document.createTextNode(newTodo));
  // listItem.appendChild(link);
  // todoList.appendChild(listItem);
  // todoInput.value = "";
}
