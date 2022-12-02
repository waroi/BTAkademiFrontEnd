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
    document.addEventListener("DOMContentLoaded", loadAllFilms);
  
}



// Functions

// Filimi Ekelemek Kontrol Start
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

    let filmArrayObj = {
        filmAdi: filmAdi.value,
         yonetmen: yonetmen.value,
         turu : turu.value,
         yil : yil.value,
         puan : puan.value,
         afis : afis.value,
        }

    addFilmsToUI(filmArrayObj);
    localadd(filmArrayObj);
    

clearinput()
    
}
// Filimi Ekelemek Kontrol End

function clearinput() {
filmAdi.value="";
yonetmen.value="";
turu.value="";
yil.value="";
puan.value="";
afis.value="";

let onizleresim=document.querySelector("#resim");
    onizlepicture.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
    
}

// Resim Önizleme Start 
function onizlemepic(e){
    let onizleresim=document.querySelector("#resim");
    onizlepicture.setAttribute("src",afis.value)
}
// Resim Önizleme End 
// Filimi ARayüzde Göstermek Start
function addFilmsToUI(filmArrayObj){
let cards=document.querySelector("#cards");
   const card=document.createElement("div");
   card.className="col-3 mb-1 deneme"
   card.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img class="imglist mt-2"src="${filmArrayObj.afis}" alt="...">
                <div class="card-body">
                         <h5 class="card-title film-adi"> ${filmArrayObj.filmAdi} </h5>
                         <p class="card-text">
                            <strong>Yönetmen :</strong> ${filmArrayObj.yonetmen}</p>
                            <strong>Filmin Türü :</strong> ${filmArrayObj.turu} </p>
                            <strong>Filim Yılı :</strong>${filmArrayObj.yil}</p>
                           <strong>Filim IMDB Puanı</strong> ${filmArrayObj.puan}</p>
                         <a href="#" class="btn btn-primary">Edit</a>
                          <a  id="delete"  class="delete btn btn-primary ">Sil</a>
                          
                 </div>
          </div> `;
 cards.appendChild(card);
}
// Filimi ARayüzde Göstermek End
//Filimi Sil Start

function delFilm(e){
    const silClasName =e.target.className;

   // e.target.parentElement.parentElement.remove();
    if (silClasName.indexOf("delete") !== -1) {
        e.target.parentElement.parentElement.parentElement.remove();
        removestorage( e.target.parentElement.parentElement.parentElement)
      }

}

// Filimi Sil End

//localStorage Ekleme işlemi



function localadd(filmArrayObj){
    let filmlist =localFilmsget(); 
    filmlist.push(filmArrayObj);
    localStorage.setItem("filims",JSON.stringify(filmlist))

};


function localFilmsget(){
    let filims;
    if(localStorage.getItem("filims")===null){
        filims=[];
    }else{
        filims=JSON.parse(localStorage.getItem("filims"))
    }
  return filims
  }
  
function loadAllFilms(){
    let films= localFilmsget();
    films.forEach((film,index)=> addFilmsToUI(film));
}


// silme işlemi Start
function removestorage(remo){

    let text= remo.querySelector(".film-adi")
    let text2=text.textContent.toLocaleLowerCase();

    let todos= localFilmsget()

    todos.forEach((item,index)=>{
        // console.log(item)
        // let hakan = item.toString();
        // console.log(hakan)
        // JSON.stringify(item);

        const objearry = Object.values(item);
       

    if(objearry.indexOf(text2.trim()) !== -1){
        
        // console.log(item)
        // console.log(index)
        // console.log("filmAdi")
      
      todos.splice(index,1);
      //console.log(todos)
    }else{
        // debugger;
        // todos=  todos.filter(x=>x.filmAdi!=text2.trim())
        //todos.splice(index,1);
        console.log("buradasın")
        console.log(text2)

    }

    
    })

    localStorage.setItem("filims",JSON.stringify(todos))
    }
    
// Silme İşlemi End