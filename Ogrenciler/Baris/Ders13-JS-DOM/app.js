// console.log(window);
// console.log(this);

// //Object literal

// const obje = {
//   name: "deneme",
//   age: 44,
// };

// console.log(obje);

// const dizi = [2, 3, 4];

// console.log(dizi);

//Spread operator

// let sayilar1 = [1, 2, 3, 4];
// let sayilar2 = [5, 6, 7, 8];
// let sayilar3 = [...sayilar1, ...sayilar2]; //dizileri birleştirme işlemi yapar

// console.log(sayilar3);

//Functional Scope

// function Func() {
//   var value1 = 40;
//   let value2 = 80;
//   const value3 = 60;
//   console.log("Function scope: ", value1, value2, value3);
// }

// console.log("Global scope: ", value1, value2, value3);
// Func();

//BLOCK SCOPE

// if (true) {
//   var value1 = 40;
//   let value2 = 80;
//   const value3 = 60;
//   console.log("Block scope: ", value1, value2, value3);
// }
// console.log("Global scope: ", value1, value2, value3);

//

// let value;
// let title;

// value = document;
// value = document.body;
// value = document.location;
// value = document.URL;
// value = document.scripts[0];
// value = document.links;
// value = document.links[0].className = "linkClass deneme";
// value = document.links[0].getAttribute("class");
// value = document.links[0].classList;

// //ID'ye göre seçim
// value = document.getElementById("p1");

// //CLASS'a göre seçme
// value = document.getElementsByClassName("title");

// //TAG'a göre seçme
// value = document.getElementsByTagName("p");

// //CSS selector ile seçim
// value = document.querySelector("h2");
// value = document.querySelector(".title");
// value = document.querySelector("#p1");
// value = document.querySelectorAll("h2");
// value = document.querySelectorAll(".title");

// value = document.getElementById("p1");

// title = document.querySelector("h2");
// title.className = "btn btn-primary";

// // console.log(value);

// //Event - Click

// title.addEventListener("click", denemeFonksiyon);

// function denemeFonksiyon() {
//   value.style.border = "5px solid green";
// }

let value;
value = document.querySelector("ul");
value.addEventListener("click", d);
function d(e) {
  e.target.style.textDecoration = "line-through";
}
