var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

eventListeners();

function eventListeners(){
document.addEventListener("DOMContentLoaded", getAllPhoto);
}

function openFullImg(pic){

    fullImgBox.style.display="flex";
    fullImg.src=pic;



}

function closeFullImg(){
    fullImgBox.style.display="none";
}


function getAllPhoto(e) {
    e.preventDefault();
   // console.log("buradsın")
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

    xhr.onload = function () {
      
     
      if (this.status == 200) {
        const parsedData = JSON.parse(this.responseText);
        resims = parsedData.slice(1,21);
        const Imngbox = document.getElementById("img-gallery2");
        console.log(Imngbox);

            resims.forEach(function (dataItem) {
                        Imngbox.innerHTML += `
                            <img src="${dataItem.url}" alt="" onclick="openFullImg(this.src)" >
                            `;
                            });
                        } else {
                            console.log("bir hata oluştu");
                        }

    };


  

  xhr.send();
}
