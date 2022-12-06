class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");

    filmList.innerHTML += `
   <tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
     <td>${newFilm.title}</td>
     <td>${newFilm.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>
  `;
  }
  static clearInputs(elemen1, elemen2, elemen3) {
    elemen1.value = "";
    elemen2.value = "";
    elemen3.value = "";
  }

  static deleteFilmFromUI(e) {
    e.parentElement.parentElement.remove();
  }
  static cleatAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
  static displayMessage(message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }
  static filterFilmsUI() {
    const ara = document.getElementById("textara");
    const tr = document.getElementById("films");
    console.log(tr);
  }
}
