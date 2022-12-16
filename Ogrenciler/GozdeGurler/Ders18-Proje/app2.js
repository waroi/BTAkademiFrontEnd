function showAllPhotos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.onload = function () {
    let list = document.getElementById("photos");
    if (this.status == 200) {
      const parsedData = JSON.parse(this.responseText);
      //console.log(parsedData);
      parsedData.forEach((photo) => {
        if (photo.albumId === 1) {
          list.innerHTML += `
            
            <p class="text-center"><strong>Photo Title:</strong> ${photo.title}</p>
            <p class="text-center"><strong>Photo URL: </strong> <img src=${photo.url}/></p>
            <div class=" d-flex justify-content-center mb-5">
            <button type="button" class="btn btn-primary ms-5">Düzenle</button>
            </div>`;
        }
      });
    } else {
      console.log("Bir hata oluştu");
    }
  };

  xhr.send();
}

showAllPhotos();
