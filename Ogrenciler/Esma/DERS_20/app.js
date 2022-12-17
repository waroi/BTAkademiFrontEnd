const card = document.querySelector(".newcard");
const getir = document.querySelector(".getir");
EventListener();
function EventListener() {
  getir.addEventListener("click", yukleme);
}

function yuklemeler(e) {
  yukleme(e);
}
function yukleme(e) {
  e.preventDefault();
  let cards = document.querySelector(".newcard");
  const card = document.createElement("div");
  card.className = "col-3 mb-1";
  card.innerHTML = `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div> 
  </div>`;

  //   const request = new Request("https://jsonplaceholder.typicode.com/posts");
  //   request
  //     .get()
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
}

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

// const request = new Request("https://jsonplaceholder.typicode.com/posts");

// request
//   .get()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .post({
//     userId: 99999,
//     title: "Deneme 1234",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .put(1, {
//     userId: 99999,
//     title: "Deneme 1234",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .delete(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
