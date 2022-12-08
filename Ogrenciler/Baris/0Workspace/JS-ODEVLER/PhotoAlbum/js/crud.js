class Request {
  constructor(url) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }
  get() {
    //id,title,url 'leri return olarak almak için parametre tanımla
    //birde öyle dene
    this.xhr.open("GET", this.url);
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        const parsedList = JSON.parse(this.xhr.responseText);
        parsedList.forEach((item) => {
          if (item.albumId === 1) {
            UI.showToPhotoUI(item.id, item.title, item.url);
          }
        });
      }
    };
    this.xhr.send();
  }
  post(item) {
    this.xhr.open("POST", this.url);
    this.xhr.send(JSON.stringify(item));
  }
  put(id, item) {
    ///KONTROL EDİLECEK
    this.xhr.open("PUT", `${this.xhr.url}/${id}`);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        const parsedList = JSON.parse(this.xhr.responseText);
        parsedList.map((data) => {
          item = data.url;
        });
      }
    };
    this.xhr.send(JSON.stringify(item));
  }
  delete(id) {
    this.xhr.open("DELETE", `${this.url}/${id}`);
    this.xhr.send();
  }
}

const request = new Request("https://jsonplaceholder.typicode.com/photos");

function showAllPhotos() {
  request.get();
}
