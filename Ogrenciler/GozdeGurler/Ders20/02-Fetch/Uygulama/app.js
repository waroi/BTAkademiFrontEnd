// function getApi(url) {
//   let list = document.getElementsByClassName("card");
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach(function (veri) {
//         console.log(veri);
//         list.innerHTML += `
//         <div class="card-body">
//         <h5 class="card-title">${veri.title}</h5>

//         <p class="card-text">
//           ${veri.body}
//         </p>
//       </div>`;
//         list[0].insertAdjacentHTML("beforeend");
//       });
//     })
//     .catch((err) => console.log("Hata", err));
// }

// getApi("https://jsonplaceholder.typicode.com/posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    let list = "";
    data.forEach((post) => {
      list += `
      <div class="card m-5 ">
      <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.body}</p>
      </div>
      </div>`;
    });
    document.getElementById("container").innerHTML = list;
  })
  .catch((err) => console.log("Error:", err));
