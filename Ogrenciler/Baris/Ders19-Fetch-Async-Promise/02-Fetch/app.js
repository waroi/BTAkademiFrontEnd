// function getTextFile() {
//   fetch("deneme.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getTextFile();

// function getJSONFile() {
//   fetch("employees.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getJSONFile();

// function getAPI() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getAPI();

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
        headers: { "Content-type": "application/json" },
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
        headers: { "Content-type": "application/json" },
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
        .then((response) => resolve("Veril silme başarılı", response))
        .catch((err) => reject(err));
    });
  }
}

const req = new Request("https://jsonplaceholder.typicode.com/posts");

req
  .get()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

req
  .post({
    userId: 999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

req
  .put(1, {
    userId: 999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
req
  .delete(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
