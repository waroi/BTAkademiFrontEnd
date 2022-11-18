// Konsolda mesaj gösterme
// console.log("Deneme 2");

// Variables - Değişkenler

// Number - Sayısal ifadeler
// var firstNumber = 20;
// var secondNumber = 30;
// console.log("Sayıların toplamı: ", firstNumber + secondNumber);

// Stringler - Yazılı ifadeler - Karakter dizileri
// var userName = "Hakan";
// console.log(userName);
// console.log(typeof userName);

// Boolean - True/False
// var a = true;
// console.log(a);
// console.log(typeof a);

// null - Boş
// var a = null;
// console.log(a);
// console.log(typeof a);

// Object - Nesne

// var user = {
//   name: "Varol",
//   surname: "Maksutoğlu",
//   age: 36,
//   email: "varolmaksutoglu@yandex.com",
// };
// // console.log(user);
// // console.log(typeof user);
// console.log(typeof user.name);
// console.log(user.age);

// // Array - Diziler
// var users = ["Varol", "Elvin", "Barış", 10];
// // console.log(users);
// // console.log(typeof users);
// console.log(users[3]);

// Date - Tarih Objesi
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// Function - Fonksiyonlar
// var merhaba = function () {
//   console.log("Deneme Mesajı");
// };
// // merhaba();
// // merhaba();
// // merhaba();
// console.log(merhaba);
// console.log(typeof merhaba);

// Primitive değer
// var a = 10;
// var b = a;
// console.log(a, b); // 10, 10 --
// a = 20;
// console.log(a, b); // 20, 10 -- 20, 20 (elvin)

// // Referans değer
// var a = {
//   name: "Varol",
//   surname: "Maksutoğlu",
//   age: 36,
//   email: "varolmaksutoglu@yandex.com",
// };
// var b = a;
// console.log(a, b); // 10, 10 --
// a.name = "Hakan";
// a.surname = "Mollaahmetoğlu";
// console.log(a, b); // 20, 10 -- 20, 20 (elvin)

// var a = [1, 2, 3];
// var b = a;
// a.push(4);
// console.log(b);

// scope - kapsam
// function deneme() {
//   var a = 10; // Functional Scope
// }
// deneme();
// console.log(a);

// {
//   let a = 10; // Blog Scope
//   const b = 20; // Blog Scope
//   a = 30;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// Tip Dönüşümleri
// let value;
// let a = 123;
// a = 1.14;
// a = function () {
//   console.log("Deneme");
// };
// a = [1, 2, 3];
// value = String(a);
// a();
// value = a + " bir sayıdır";

// let b = "123";
// // b = "Varol";
// // b = "1.75";
// value = Number(b);

// Otomatik tip dönüşümü
// value = 34 + "6"; // 346
// value = 34 - "6"; // 28
// value = 34 + Number("6"); // 40
// console.log(value);
// console.log(typeof value);

// Operatörler
// let s;
// const a = 10;
// const b = 4;
// s = a + b; // Toplama operatörü
// s = a - b; // Cıkarma operatörü
// s = a * b; // Çarpma operatörü
// s = a / b; // Bölme Operatörü
// s = a % b; // Mod Operatörü

// s = Math.PI;
// s = Math.round(a / b);
// s = Math.ceil(a / b);
// s = Math.floor(a / b);
// s = Math.sqrt(a);
// s = Math.pow(a, b);
// s = Math.sqrt(a / b);
// s = Math.floor(Math.random() * 100);
// s = (Math.random() * 100).toFixed(2);

// console.log(s);
