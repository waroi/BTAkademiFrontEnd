
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
const table = document.querySelector("#tablelist");


//Events Process
function eventListeners(){
    kaydeti.addEventListener("click",kaydetfunc);
    document.addEventListener("DOMContentLoaded", loadAllFilms);
}

eventListeners();
// functions process
// Kaydetme butonuna basım işlemie Start 
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


     function loadAllFilms() {
         Films=localget();
      
        Films.forEach((film)=>{
             addToFilmUI(film);
      
       })
       }
      
    
    function localget(){
         let Films;
        if(localStorage.getItem("Films")===null){
         Films=[];
        }else{
             Films=JSON.parse(localStorage.getItem("Films"))
    }
      return Films
      }
    




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
    addToFilmUI(Films);
}
// Local Storage Kaydetme işlemi End

// Filmleri tabloya eklemeke

function addToFilmUI(list){

    

// let satir = document.createElement("tr"); 
// let turu =document.createElement("td");
// let yili =document.createElement("td");
// let puan =document.createElement("td");
// let afis =document.createElement("td");
// let edit= document.createElement("td");

// satir.appendChild(turu);
// satir.appendChild(yili);
// satir.appendChild(puan);
// satir.appendChild(afis);
// satir.appendChild(edit);




 list.forEach((element,index) => {
 let satir = document.createElement("tr"); 
     for(let i=0; i<=5; i++){      
          let td=document.createElement("td");  
          td.innerText=list[index][i];
          satir.appendChild(td);
       }

     let button=document.createElement("td");
     satir.append(button); 
    table.appendChild(satir);
 });
 

}



// <tr class="list">
//             <td class="">Mark</td>
//             <td class="">Otto</td>
//             <td class="">@mdo</td>
//             <td class="">Mark</td>
//             <td class="">Otto</td>
//             <td class="">
//                 <span class=><i class="bi bi-pencil-square"></i></span>
//                 <span><i class="bi bi-trash"></i></span>
//             </td>
//           </tr>

//