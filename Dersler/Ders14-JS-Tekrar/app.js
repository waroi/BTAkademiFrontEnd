// // Variables - Değişkenler

// // Number

// var firstNumber = 50;

// // firstNumber = "Deneme"

// // String - Karakter Dizisi

// var userName = "Varol";
// // document.write(userName);
// // document.write(typeof userName);

// // console.log(userName);
// // console.log(typeof userName);

// // Object
// var user = { name: "Barış Benli", age: 20 }; // Object Literal
// // console.log(user.name);
// // console.log(typeof user.name);
// // console.log(typeof user);
// // console.log(user);
// deneme();
// // Array - Dizi
// var numbers = [23, 44, 77, 99];

// // console.log(numbers);
// // console.log(numbers[0]);
// // console.log(numbers[numbers.length - 1]);

// function deneme() {
//   console.log("Deneme");
// }

// deneme();
// console.log(a);
// var a;
// a = 5;

// function kare(a) {
//   return a * a;
// }

// let sonuc = kare(2) + 4;

// console.log(sonuc);

// // Global Scope - Ana Kapsam
// var a = 10;
// let b = 20;
// const c = 30;

// // Functional Scope - Foknsiyon Kapsamı
// deneme();
// function deneme() {
//   var a = 15; // function scope
//   let b = 25; // blog scope
//   const c = 35; // blog scope
//   console.log("function scope: ", a, b, c); // 15, 25, 35
// }

// // Blog Scope - Blog Kapsamı
// if (true) {
//   var a = 20; // function scope
//   let b = 30; // blog scope
//   const c = 40; // blog scope
//   console.log("blog scope: ", a, b, c); // 20, 30, 40
// }

// console.log("global scope: ", a, b, c); // 20, 30, 40 - 10, 20, 30

// let a = 20;
// a = [2, 3, 4, 5];
// a = true;
// let b = String(a);

// console.log(b);
// console.log(typeof b);

// let a = "23";
// a = "Emre";
// let b = Number(a);

// console.log(b);
// console.log(typeof b);

// console.log(5 + "4");
// console.log(5 - "4");

// Operatörler - +Toplama -Çıkarma /Bölme *Çarpma %Mod

// const firstName = "Varol";
// const lastName = "Maksutoglu";
// const department = "Bilişim";
// const salary = "3750";

// let value = firstName + " " + lastName + " " + department + " " + salary;
// // Template Literal - Ters tek tırnak
// value = `İsim: ${firstName}, Soyisim: ${lastName}, Bölüm: ${department}, Maaş: ${salary} `;

// value = firstName[0];
// value = firstName.length;
// value = firstName.indexOf("r");
// value = firstName.includes("t");

// console.log(value);

// const numbers = [45, 78, 34, 79, 23, 5];
// let value;

// numbers.push(7);
// numbers.pop();
// numbers.shift();
// const newNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// value = numbers;
// value = newNumbers;
// value = numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(value);

// Karşılaştırma Operatörleri
// == Eşittir
// === Hem Türü Hem Değeri Eşit
// != Eşit Değildir
// !== Hem Türü Hem Değeri Eşit Değildir
// > Büyüktür
// < Küçüktür
// >= Büyük Eşit
// <= Küçük Eşit

// console.log(2 <= 2 && 2 === "2"); // And Operatörü
// console.log(2 <= 2 || 2 === "2"); // Or Operatörü

// const islem = "2";

// if (islem === "1") {
//   console.log("İşlem 1");
// } else if (islem === "2") {
//   console.log("İşlem 2");
// } else {
//   console.log("Yanlış işlem Seçtiniz.");
// }

// switch (islem) {
//   case "1":
//     console.log("İşlem 1");
//     break;
//   case "2":
//     console.log("İşlem 2");
//     break;
//   default:
//     console.log("Yanlış işlem Seçtiniz.");
// }

// function isim() {
//   console.log("Yanlış işlem Seçtiniz.");
// }

// const deneme = function () {
//   console.log("Yanlış işlem Seçtiniz.");
// };

// for (let i = 1; i <= 10; i++) {
//   console.log(i, ". Döngü");
// }

// const langs = ["Python", "C++", "Javascript"];
// let value = langs.forEach(function (lang) {
//   console.log(lang[0]);
// });

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i][0]);
// }

let value;

value = document.location;

// ID'ye göre seçim
value = document.getElementById("title");
value.style.color = "red";

// class'a göre seçim
value = document.getElementsByClassName("text");

for (let i = 0; i < value.length; i++) {
  value[i].style.color = "blue";
}

// Tag'e göre seçim
value = document.getElementsByTagName("p");

// Css Selector'e göre seçim
value = document.querySelector("p");
value = document.querySelector(".text");
value = document.querySelector("#title");
value = document.querySelectorAll("p");
value = document.querySelectorAll(".text");
value = document.querySelectorAll("#title");
value = document.getElementById("section");

const button = document.createElement("a");
button.id = "clear-todos";
button.className = "btn btn-danger ms-3";
button.href = "https://www.google.com/";
button.target = "_blank";
const text = document.createTextNode("Temizle");
button.appendChild(text);
value.appendChild(button);

const ekle = document.createElement("a");
ekle.className = "btn btn-success ms-3";
ekle.href = "https://www.udemy.com/";
ekle.target = "_blank";
const ekleText = document.createTextNode("Ekle");
ekle.appendChild(ekleText);
value.appendChild(ekle);

value = document.getElementById("inner");
value.innerHTML = `<button class="btn btn-primary m-3" id="kaydet">Kaydet</button>`;

console.log(value);

// DOM Eventleri

const kaydetButton = document.getElementById("kaydet");

// kaydetButton.addEventListener("click", function () {
//   console.log("Çalıştı");
// });

kaydetButton.addEventListener("click", deneme); // submit, focus, keypress

function deneme() {
  console.log(document);
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus", clearValue);

function konsol() {
  console.log(textInput.value);
}

function clearValue() {
  textInput.value = "";
}
