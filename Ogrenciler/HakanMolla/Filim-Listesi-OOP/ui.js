class UI{

  static addFilmToUI(newFilm){
    let card=document.querySelector("#cards");

    card.innerHTML +=
    `
        <div class="col-3 mb-1 deneme"">
                <div class="card" style="width: 18rem;">
                  <img class="imglist mt-2"src="${newFilm.afisUrl}" alt="...">
                      <div class="card-body">
                              <h5 id="film-adi"class="card-title film-adi"> ${newFilm.filmAdi} </h5>
                                <p class="card-text">
                                  <strong ">Yönetmen :</strong>  ${newFilm.yonetmen}</p>
                                  <strong  >Filmin Türü :</strong>  ${newFilm.filmTuru} </p>
                                  <strong ">Filim Yılı :</strong>  ${newFilm.filmYili}</p>
                                  <strong >Filim IMDB Puanı</strong>  ${newFilm.filmPuan}</p>
                                <a href="#" class="edit btn btn-primary">Edit</a>
                                  <a  id="filmDelete"  class="delete btn btn-primary ">Sil</a>
                                
                        </div>
                </div>
          </div>
    `;

  }

  static clearInputs() {
    filmAdiElement.value="";
    yonetmenElement.value="";
    filmTuruElement.value="";
    filmYilielement.value="";
    filmPuanElement.value="";
    afisUrlElement.value="";

    let onizleresim=document.querySelector("#resim");
  onizlepicture.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
 
    
  }

  static deleteFilmFromUI(e){
    e.target.parentElement.parentElement.parentElement.remove();

  }

}