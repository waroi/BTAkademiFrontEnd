
//Window
// console.log(window);
// console.log(this);

// //Spread Operator

// let sayilar = [1,2,3,4,5]

// let sayilar2 = [5,6,7,8,9]

// let sayilar3 =[...sayilar,...sayilar2];
// console.log(sayilar3)

// if(true) {
//     var value1 = 40;
//     let value2= 80;
//     const value3=60;

//     console.log("Block Scope: ", value1,value2,value3);
// }

// console.log("Global Scope: ", value1,value2,value3) // 2 ve 3 tanımlı değil, 1 olan vavr'lı yazıldığı için ulaşılabiliyor.

let value;

value=document;
value=document.body;
value=document.location;
value=document.URL;


//ID'ye göre seçim

value= document.getElementById("p1")

//class'a göre seçim
value= document.getElementsByClassName("title");

//tage göre seçim
value= document.getElementsByTagName("p")

//css selector ile seçim--İlk bulduğunu getiriyor.

value=document.querySelector("h1")
value=document.querySelector(".title")
value=document.querySelector("#p1")

value=document.querySelectorAll("h2") //hepsini getiriyor

//style
value= document.getElementById("p1");

value.style.border="5px solid red";

value=document.querySelector("h1");
value.className="btn btn-primary";

//console.log(value)

//EVENT - CLICK

value = document.querySelector("h2")
title.className="btn btn-primary";


title.addEventListener("click", denemeFonksiyon);

function denemeFonksiyon() {
    value.style.border="5px solid green"
}



let value;

// value = document.getElementsByClassName("urun");
// console.log(value);

// value.addEventListener("click", alindi);

function alindi(e) {
  e.target.style.backgroundColor = "grey";

  e.target.style.border = "5px solid green";
  e.target.style.textDecoration = "line-through";
}

// const value = document.querySelectorAll(".urun");

// value.forEach((urun) => {
//   urun.addEventListener("click", function handleClick(event) {
//     console.log("box clicked", event);

//     urun.setAttribute("style", "background-color: yellow;");
//   });
// });

value = document.getElementsByClassName("urun");
for (var i = 0; i < value.length; i++) {
  value[i].addEventListener("click", alindi);
}



