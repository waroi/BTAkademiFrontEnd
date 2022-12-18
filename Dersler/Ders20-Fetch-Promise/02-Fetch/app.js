// function getTextFile() {
//   fetch("deneme.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();

// function getJsonFile() {
//   fetch("employees.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("Hata", err));
// }
// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("Hata", err));
// }
// getApi();

class Request {
  constructor(url) {
    this.url = url;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri Silme Başarılı", response))
        .catch((err) => reject(err));
    });
  }
}
const request = new Request("https://jsonplaceholder.typicode.com/posts");

request
  .get()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .post({
    userId: 99999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .put(1, {
    userId: 99999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .delete(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
