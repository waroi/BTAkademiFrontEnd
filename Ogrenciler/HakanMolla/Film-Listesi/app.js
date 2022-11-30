//Selector Listesi
const filmforms=document.getElementById("filmForm")
const filmAdi = document.querySelector("#filmAdi");
const yonetmen = document.querySelector("#yonetmen");
const turu = document.querySelector("#turu");
const yil = document.querySelector("#yili");
const puan = document.querySelector("#puan");
const afis = document.querySelector("#afis");
const buttonKaydet = document.querySelector(".ksubmit");
const buttonGuncelle = document.querySelector(".guncelle");
const onizlepicture = document.getElementById("onizle");
const cardSil = document.querySelector("#cards");
eventListeners();

//Events
function eventListeners(){

    buttonKaydet.addEventListener("click",addFilm);
    afis.addEventListener("keyup",onizlemepic);
    cardSil.addEventListener("click",delFilm);
  
}



// Functions

// Filimi Ekelemek Start
function addFilm(e){
    e.preventDefault();
    const filmAdis =filmAdi.value;
    const yonetmens =yonetmen.value;
    const turus = turu.value;
    const yils = yil.value;
    const puans = puan.value;
    const afiss =afis.value;

    if(filmAdis===""){
        alert("Lütfen Filim Adını Giriniz. ")
    }else if(yonetmens===""){
        
        alert("Lütfen Filim Yönetmen Giriniz. ")
        
    }else if(turus===""){
        
        alert("Lütfen Filim turunu Giriniz. ")
        
    }else if(yils===""){
        
        alert("Lütfen Filim yilini Giriniz. ")
        
    }else if(puans===""){
        
        alert("Lütfen Filim Puanını Giriniz. ")
        
    }else if(afiss===""){
        
        alert("Lütfen Filim Afisini Giriniz. ")
        
    }
    addFilmsToUI();

filmAdi.value="";
yonetmen.value="";
turu.value="";
yil.value="";
puan.value="";
afis.value="";


    
}
// Filimi Ekelemek End

// Resim Önizleme Start 
function onizlemepic(e){
    let onizleresim=document.querySelector("#resim");
    onizlepicture.setAttribute("src",afis.value)
}
// Resim Önizleme End 
// Filimi ARayüzde Göstermek Start
function addFilmsToUI(){
let cards=document.querySelector("#cards");
   const card=document.createElement("div");
   card.className="col-3 mb-1 deneme"
   card.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img class="imglist mt-2"src="${afis.value}" alt="...">
                <div class="card-body">
                         <h5 class="card-title"> ${filmAdi.value} </h5>
                         <p class="card-text">
                            <strong class="">Yönetmen :</strong> ${filmAdi.value}</p>
                            <strong>Filmin Türü :</strong> ${turu.value} </p>
                            <strong>Filim Yılı :</strong>${yil.value}</p>
                           <strong>Filim IMDB Puanı</strong> ${puan.value}</p>
                         <a href="#" class="btn btn-primary">Edit</a>
                          <a  id="delete"  class="delete btn btn-primary ">Sil</a>
                          
                 </div>
          </div> `;
 cards.appendChild(card);


 
 
}
// Filimi ARayüzde Göstermek End
//Filimi Sil Start

function delFilm(e){
    const silclasname =e.target.className;
   // e.target.parentElement.parentElement.remove();
    if (silclasname.indexOf("delete") !== -1) {
        e.target.parentElement.parentElement.parentElement.remove();
      }

}

// Filimi Sil End
