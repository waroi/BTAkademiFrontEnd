const form = document.getElementById("film-form");
const name = document.getElementById("name");
const date = document.getElementById("date");
const director = document.getElementById("director");
const image = document.getElementById("image");
const filmList = document.getElementById('filmList');
const clearButton = document.getElementById("clear-allfilm")
const deleteFilm = document.getElementById("filmList");




eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    clearButton.addEventListener("click", clearAllFilms);
    deleteFilm.addEventListener("click", removeFilm);

}


function isNullInput(input) {
    const newFilm = input.value.trim();
    if (newFilm === "") {
        return false;
    } else {
        return newFilm
    }
}

function addFilm(e) {
    e.preventDefault();

    const nameValue = isNullInput(name);
    const dateValue = isNullInput(date);
    const directorValue = isNullInput(director);
    const imageValue = isNullInput(image);

    if (!nameValue || !dateValue || !directorValue || !imageValue) {
        console.log("tum alanlari eksiksiz doldurun");
    }
    else {
        addFilmToUI({
            name: nameValue,
            date: dateValue,
            director: directorValue,
            image: imageValue
        });
    }

}


function addFilmToUI(newFilm) {
    const container = document.createElement("div");
    container.className = "col-lg-3 col-6 mb-3";
    container.innerHTML = `
        <div class="card">
            <img src="${newFilm.image}"
                class="card-img-top cover-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${newFilm.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${newFilm.date}</li>
                <li class="list-group-item">${newFilm.director}</li>
            </ul>
            <div class="card-body d-flex flex-column">
                <button type="button" class="btn btn-dark d-block mb-1">guncelle</button>

                <button type="button" class="btn btn-danger d-block">sil</button>
            </div>
        </div>
    `;
    filmList.appendChild(container);
    name.value = "";
    date.value = "";
    director.value = "";
    image.value = "";


    console.log("film basariyla eklendi");

}

function clearAllFilms() {
    filmList.innerHTML = "";


}
function removeFilm(e) {

    if (e.target.className === "btn btn-danger d-block") {

        e.target.parentElement.parentElement.parentElement.remove();
    }

}








