// // Window objesi
// console.log(window);
// console.log(this);

// // Object Literal
// const obje = {
//   name: "Deneme",
//   age: 44,
// };

// console.log(obje);
// const dizi = [2, 3, 4];
// console.log(dizi);

// // Spread Operator
// let sayilar1 = [1, 2, 3, 4];
// let sayilar2 = [5, 6, 7, 8];
// // let sayilar3 = [];

// // for (let i = 0; i < sayilar1.length; i++) {
// //   sayilar3.push(sayilar1[i]);
// // }
// // for (let i = 0; i < sayilar2.length; i++) {
// //   sayilar3.push(sayilar2[i]);
// // }

// let sayilar3 = [...sayilar1, ...sayilar2];

// console.log(sayilar3);

// Functional Scope
// function Func() {
//   var value1 = 40;
//   let value2 = 80;
//   const value3 = 60;
//   console.log("Function Scope: ", value1, value2, value3);
// }

// var value1;
// var value2;
// var value3;

// console.log("Global Scope: ", value1, value2, value3);
// Func();

// if (true) {
//   var value1 = 40;
//   let value2 = 80;
//   const value3 = 60;
//   console.log("Blog Scope: ", value1, value2, value3);
// }
// var value2;
// var value3;
// console.log("Global Scope: ", value1, value2, value3);

let value;
let title;

value = document;
value = document.body;
value = document.location;
value = document.URL;
value = document.scripts[0];
value = document.links;
value = document.links[0].className = "linkClass deneme";
value = document.links[0].getAttribute("class");
value = document.links[0].classList;

// ID'ye göre seçim
value = document.getElementById("p1");

// Class'a göre seçim
value = document.getElementsByClassName("title");

// Tag'e göre seçim
value = document.getElementsByTagName("p");

// Css Selector ile seçim
value = document.querySelector("h2");
value = document.querySelector(".title");
value = document.querySelector("#p1");
value = document.querySelectorAll("h2");
value = document.querySelectorAll(".title");
value = document.querySelectorAll("#p1");

value = document.getElementById("p1");

title = document.querySelector("h2");
title.className = "btn btn-primary";
// value.className = console.log(value);

// Event - click
title.addEventListener("click", denemeFonksiyon);

function denemeFonksiyon(e) {
  e.target.className = "btn btn-danger";
  value.style.border = "5px solid green";
}
