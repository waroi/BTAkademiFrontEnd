
// verilernden birisi boş ise hata verecek sistem,
// düzenlemede mdul acma işlemi olacak
// selectors Process

const filmAdi = document.querySelector("#filimadi");
const filmTuru = document.querySelector("#turu");
const yonetmen = document.querySelector("#yonetmen");
const yili = document.querySelector("#yili");
const afis = document.querySelector("#afis");
const imdb = document.querySelector("#imdb");
const kaydeti = document.querySelector("#kaydet");
const guncelleme = document.querySelector("#guncelleme");


//Events Process
function eventListeners(){
    kaydeti.addEventListener("click",kaydetfunc);
}


// functions process

eventListeners();

//Kaydetme butonuna basım işlemie Start 

function kaydetfunc(e){
e.preventDefault();

let filimlist=[
    filmAdi.value,
    filmTuru.value,
    yonetmen.value,
    yili.value,
    afis.value,
    imdb.value,
    
]
saveLocal(filimlist);
    
    filmAdi.value="";
    filmTuru.value="";
    yonetmen.value="";
    yili.value="";
    afis.value="";
    imdb.value="";
}
//Kaydetme butonuna basım işlemie End 
// Local Storage Kaydetme işlemi Start

function saveLocal(filim){
    let Films;
    if(localStorage.getItem("Films")=== null){
        Films=[];
    }else{
        Films = JSON.parse(localStorage.getItem("Films"));
    }

    Films.push(filim);
    localStorage.setItem("Films",JSON.stringify(Films))
}
// Local Storage Kaydetme işlemi End