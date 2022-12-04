class Request {
  constructor(url) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }
  get() {
    this.xhr.open("GET", this.url);
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        console.log(this.xhr.responseText);
      }
    };
    this.xhr.send();
  }
  post(data) {
    this.xhr.open("POST", this.url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        console.log("Post başarılı");
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  put(id, data) {
    this.xhr.open("PUT", `${this.url}/${id}`);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        console.log("Güncelleme Başarılı" + this.xhr.responseText);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  delete(id) {
    this.xhr.open("DELETE", `${this.url}/${id}`);
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        console.log("Silme işlemi Başarılı");
      }
    };
    this.xhr.send();
  }
}

const req = new Request("https://jsonplaceholder.typicode.com/posts");

// req.get();
req.post({ userId: 101, title: "Deneme", body: "Bu bir deneme yazısı" });
// req.put(1, { userId: 101, title: "Deneme", body: "Bu bir deneme yazısı" });
// req.delete(1);
