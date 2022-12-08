const body = document.querySelector("body");
const inputsColor = document.querySelectorAll(".form-floating");
const inputs = document.querySelectorAll("input");
const txtAra = document.getElementById("txtAra");
const frmDiv = document.getElementById("frmDiv");
const frmFilm = document.getElementById("frmFilm");
const txtFilmAdi = document.getElementById("txtFilmAdi");
const txtTur = document.getElementById("txtTur");
const txtYil = document.getElementById("txtYil");
const txtYonetmen = document.getElementById("txtYonetmen");
const txtAfisUrl = document.getElementById("txtAfisUrl");
const txtFragmanUrl = document.getElementById("txtFragmanUrl");
const imgAfis = document.getElementById("imgAfis");
const cardFilms = document.getElementById("cardFilms");
const btnTemizle = document.getElementById("btnTemizle");
const btnGuncelle = document.getElementById("btnGuncelle");
const filmDiv = document.getElementById("filmDiv");

body.style.background = `url(
  "https://wallpaperboat.com/wp-content/uploads/2019/11/cinema-17.jpg"
)`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundAttachment = "fixed";
body.style.backgroundPosition = "center";
body.className = "bg-dark";

inputs.forEach((input) => {
  input.className =
    "form-control border-bottom border-0 rounded-0 bg-transparent text-white ";
  input.required = true;
});
inputsColor.forEach((i) => {
  i.className = "form-floating mb-3 text-white";
});

eventListener();
function eventListener() {
  frmFilm.addEventListener("submit", filmEkle);
  txtAfisUrl.addEventListener("paste", afisGoster);
  document.addEventListener("DOMContentLoaded", filmCardlariOlustur);
  document.addEventListener("click", filmSil);
  btnTemizle.addEventListener("click", filmleriTemizle);
  btnGuncelle.addEventListener("click", filmGuncelle);
  txtAra.addEventListener("keyup", filmAra);
}

function filmEkle() {
  const newFilm = {
    filmAdi: txtFilmAdi.value.trim(),
    tur: txtTur.value.trim(),
    yil: txtYil.value.trim(),
    yonetmen: txtYonetmen.value.trim(),
    afisUrl: txtAfisUrl.value.trim(),
    fragmanUrl: txtFragmanUrl.value.trim(),
  };
  let filmler = filmleriGetir();
  filmler.push(newFilm);
  localStorage.setItem("filmler", JSON.stringify(filmler));
}

function filmSil(event) {
  if (event.target.className === "fa-solid fa-trash-can fs-2") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    localStorageSil(
      Number(
        event.target.parentElement.parentElement.parentElement.parentElement.id
      )
    );
    location.reload();
  }
}
function localStorageSil(sil) {
  let filmler = filmleriGetir();
  filmler.forEach((film, index) => {
    if (index === sil) {
      filmler.splice(index, 1);
    }
  });
  localStorage.setItem("filmler", JSON.stringify(filmler));
}

function filmleriTemizle() {
  localStorage.removeItem("filmler");
  location.reload();
}

//İNDEX'İ DIŞARI AL SONRASINDA BAŞKA BİR FONKSİYON İLE BİLGİLERİ AL SONRASINDA
//GÜNCELLEME İŞLEMİ YAP
function filmGuncelle(filmIndex) {
  let filmler = filmleriGetir();
  console.log(filmIndex);
  // filmler.map((film, index) => {
  //   if (index === filmID) {
  //     txtFilmAdi.value = film.filmAdi;
  //     txtTur.value = film.tur;
  //     txtYil.value = film.yil;
  //     txtYonetmen.value = film.yonetmen;
  //     txtAfisUrl.value = film.afisUrl;
  //     txtFragmanUrl.value = film.fragmanUrl;
  //     imgAfis.src = film.afisUrl;
  //     body.style.background = `url(${film.afisUrl})`;
  //     body.style.backgroundRepeat = "no-repeat";
  //     body.style.backgroundSize = "cover";
  //     body.style.backgroundAttachment = "fixed";
  //     body.style.backgroundPosition = "center";
  //     body.style.transition = "all 2s ease-in-out";
  //     console.log(index);
  //   }
  // });
  // const updateFilm = {
  //   filmAdi: txtFilmAdi.value.trim(),
  //   tur: txtTur.value.trim(),
  //   yil: txtYil.value.trim(),
  //   yonetmen: txtYonetmen.value.trim(),
  //   afisUrl: txtAfisUrl.value.trim(),
  //   fragmanUrl: txtFragmanUrl.value.trim(),
  // };

  // filmler[filmID] = updateFilm;
  // localStorage.setItem("filmler", JSON.stringify(filmler));
  // body.style.background = `url(
  //   "https://wallpaperboat.com/wp-content/uploads/2019/11/cinema-17.jpg"
  // )`;
}

function filmCardlariOlustur() {
  let filmler = filmleriGetir();

  filmler.map((film, index) => {
    const card = document.createElement("div");
    const rowDiv = document.createElement("div");
    const col4 = document.createElement("div");
    const img = document.createElement("img");
    const col7 = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h4");
    const cardText = document.createElement("p");
    const cardBtnFragman = document.createElement("a");
    const col1 = document.createElement("div");
    const cardBtnGuncelle = document.createElement("button");
    const cardBtnSil = document.createElement("button");
    card.id = index;
    card.className = `card mb-3 border-0 bg-dark bg-opacity-75 text-bg-dark shadow-lg rounded-3`;
    rowDiv.className = "row g-0";
    col4.className = "col-md-4";
    img.className = "img-fluid rounded-start";
    col7.className = "col-md-7";
    cardBody.className = "card-body";
    cardTitle.className = "card-title text-center";
    cardTitle.id = "filmAdi";
    cardText.className = "card-text";
    cardBtnFragman.className = "btn btn-sm btn-danger btn-gradient";
    col1.className = "col-md-1 d-flex flex-column justify-content-between";
    cardBtnGuncelle.className =
      "btn btn-outline-secondary bg-transparent border-0 m-3";
    cardBtnSil.className = "btn btn-outline-danger bg-transparent border-0 m-3";
    card.style.transition = "all .5s ease-in-out";
    card.addEventListener("mouseover", () => {
      card.className = `card mb-3 border-0 bg-dark text-bg-dark shadow-lg`;
    });
    card.addEventListener("mouseout", () => {
      card.className = `card mb-3 border-0 bg-dark bg-opacity-75 text-bg-dark shadow-lg`;
    });
    cardFilms.appendChild(card);
    card.appendChild(rowDiv);
    rowDiv.appendChild(col4);
    rowDiv.appendChild(col7);
    rowDiv.appendChild(col1);
    col4.appendChild(img);
    col7.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBtnFragman);
    col1.appendChild(cardBtnGuncelle);
    col1.appendChild(cardBtnSil);
    img.src = film.afisUrl;
    cardBtnFragman.href = film.fragmanUrl;
    cardBtnFragman.target = "_blank";
    cardBtnFragman.innerHTML = `<i class="fa-brands fa-youtube"></i> Fragman`;
    cardTitle.innerText = film.filmAdi;
    cardText.innerHTML = `
  <ul class="list-group list-group-flush">
  <li id="filmTur" class="list-group-item bg-transparent text-white">Tür: ${film.tur}</li>
  <li id="filmYil" class="list-group-item bg-transparent text-white">Yıl: ${film.yil}</li>
  <li id="filmYonetmen" class="list-group-item bg-transparent text-white">Yönetmen: ${film.yonetmen}</li>
  </ul>
  `;
    cardBtnGuncelle.innerHTML = `<i class="fa-solid fa-square-pen fs-2"></i></button`;
    cardBtnSil.innerHTML = `<i class="fa-solid fa-trash-can fs-2"></i></button`;
  });

  if (filmler.length !== 0) {
    cardFilms.className = "container";
  } else {
    const alert = document.createElement("div");
    cardFilms.className = "d-none";
    filmDiv.className = "container";
    alert.className = "alert alert-warning";
    alert.textContent = "Koleksiyonda herhangi bir film bulunmamaktadır.";
    filmDiv.appendChild(alert);
  }
}

function filmleriGetir() {
  let filmler;
  if (localStorage.getItem("filmler") === null) {
    filmler = [];
  } else {
    filmler = JSON.parse(localStorage.getItem("filmler"));
  }
  return filmler;
}

function afisGoster(event) {
  imgAfis.src = event.clipboardData.getData("text");
  imgAfis.style.animation = "bounceIn";
  imgAfis.style.animationDuration = ".9s";
  body.style.transition = "all 2s ease-in-out";
  body.style.background = `url(${imgAfis.src})`;
  body.style.backgroundAttachment = "fixed";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
}

function filmAra() {
  const ara = txtAra.value.toLowerCase();
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    const txtValue = card[i].innerText.toLowerCase();

    if (txtValue.indexOf(ara) > -1) {
      // card[i].className =
      //   "card mb-3 border-0 bg-dark bg-opacity-75 text-bg-dark shadow-lg";
      card[i].setAttribute("style", "display:block");
    } else {
      card[i].setAttribute("style", "display:none");
      // card[i].className = "d-none";
    }
  }
}
