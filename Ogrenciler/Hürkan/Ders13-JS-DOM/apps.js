// //  Window objesi 
// console.log(window);
// console.log(this);

// //Object Literal
// const object =  {
//     name: "Deneme",
//     age: 44,
// };

// console.log(object);
// const dizi = [2, 3, 4];
// console.log(dizi);

// Spread Operatör
// let sayilar1 = [1, 2, 3, 4];
// let sayilar2 = [5, 6, 7, 8];

// // // let sayilar3 = [];

// // // for (let i = 0; i < sayilar1; i++) {
// // //     sayilar3.push(sayilar1 [i]);
// // // }
// // // for (let i = 0; i < sayilar2; i++) {
// // //     sayilar3.push(sayilar2 [i]);
// // // }

// // let sayilar3 = [...sayilar1, ...sayilar2];  //spread ile 2 dizinin elemanları buraya gelmiş olur.

// // console.log(sayilar3);

// // Functional Scope
// // function Func() {
// //     var value1 = 40;  // var functional scope, sadece o fonksiyon içinde çalışır, dışarıdan erişilemez.
// //     let value2 = 80;   // blog scope
// //     const value3 = 60;  // blog scope
// //     console.log("Function Scope : ", value1, value2, value3);
// // }
// //   var value1;
// //   var value2;
// //   var value3;

// // console.log("Global Scope : ", value1, value2, value3);
// // Func();

// //Blog Scope

// // if (true) {
// //     var value1 = 40;
// //     let value2 = 80;
// //     const value3 = 60;
// //     console.log("Blog Scope : ", value1, value2, value3);
// // }
// // var value2;
// // var value3;

// // console.log("Global Scope : ", value1, value2, value3);






// let value;
// let title;

// value = document;
// value = document.body;
// value = document.location;
// value = document.URL;
// value = document.scripts [0];
// value = document.links;
// value = document.links [0].classname = "linkClass";
// value = document.links [0].getAttribute("class");  //class attribute'ünü çağırır.
// value = document.links [0].classList; //class listesini çağırır.


// // ID'ye göre seçim
// value = document.getElementById("p1");

// //class'a göre seçim
// value = document.getElementsByClassName("title");

// //Tag'e göre seçim
// value = document.getElementsByTagName("p");

// //Css Selector ile seçim
// value = document.querySelector("h2");  // Bir tane
// value = document.querySelector(".title");  // Bir tane
// value = document.querySelector("#p1");  // Bir tane
// value = document.querySelectorAll("h2");  // Tümü
// value = document.querySelectorAll(".title");   // Tümü
// value = document.querySelectorAll("#p1");  // Tümü

// value = document.getElementById("p1");

// title = document.querySelector("h2");
// title.className = "btn btn-primary";

// // value.ClassName = console.log(value);


// //Event - click

// title.addEventListener("click", denemeFonksiyon);

// function denemeFonksiyon() {
//     value.style.border = "5px solid green";
// }




