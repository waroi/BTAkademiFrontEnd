//String Methodları

// let value;
// const firstName = "Barış";
// const lastName = "Benli";
// const department = "Yazılım";
// const salary = "10000";

// value = firstName + lastName;
// value = firstName + " " + lastName;

// value = firstName;
// value += " " + lastName + " " + department;
// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("r");
// value = lastName.includes("en");
// value = firstName.concat(" ", lastName, " Deneme").toLowerCase();
// value =
//   "isim: " +
//   firstName +
//   "\n" +
//   "Soyisim: " +
//   lastName +
//   "\n" +
//   "Departman: " +
//   department +
//   "\n" +
//   "Maaş: " +
//   salary;

// //Template Literal
// value = `İsim:${firstName}
// Soyisim:${lastName}
// Departman:${department}
// Maaş:${salary}`;

// value = `
// <ul>
// <li>${firstName}</li>
// <li>${lastName}</li>
// <li>${department}</li>
// <li>${salary}</li>
// </ul>
// `;

// document.body.innerHTML = value;
// let value;

// const numbers = [45, 78, 34, 79, 23, 5];
// const langs = ["Python", "C++", "Javascript"];

// value = numbers.length;
// value = numbers[3];
// value = numbers[numbers.length - 1];
// // numbers.push(200);
// // value = numbers;

// // numbers.pop(); //SON KARAKTERİ SİLER
// // numbers.shift(); //İLK KARAKTERİ SİLER

// value = numbers.sort();
// value = numbers.sort(function (x, y) {
//   return x - y; //KÜÇÜKTEN BÜYÜĞE
// });

// value = numbers.sort(function (x, y) {
//   return y - x; //BÜYÜKTEN KÜÇÜĞE
// });

// value = numbers.indexOf(23); //DEĞERİN KAÇINCI SIRADAN BAŞLADIĞINI GÖSTERİR
// value = numbers.includes(7); //DEĞERİN OLUP OLMADIĞINI KONTROL EDİYOR

// console.log(value);
// console.log(typeof value);

//Object Props.

// let value;
// const user = {
//   name: "Barış",
//   age: 31,
//   email: "bbenli@pm.me",
//   langs: ["Türkçe", "İngilizce"],
//   adress: {
//     city: "Şırnak",
//     street: "Cizre Caddesi",
//     No: "70",
//   },
//   workStatus: function () {
//     console.log("Çalışıyor");
//     // return "Çalışıyor";
//   },
// };

// value = user.adress.city;
// value = user.email;
// value = user.workStatus();

//Zaman Objesi

// let now = new Date();
// value = now.getFullYear();
// value = now.getMonth();
// value = now.getDate();
// value = now.getDay();
// value = now.toDateString();

//Karşılaştırma Operatörleri
// == Eşittir : a==b;
// === Hem tür hem değer olarak eşittir : a===b;
// != Eşit değildir;
// !== Hem türü hem değeri eşit değildir
// > Büyüktür
// < Küçüktür
// >= Büyük eşit
// <= Küçük eşit

// and Operatörü >> &&

// console.log(2 == "2" && "Barış" == "Hakan"); //FALSE

// or Operatörü >> ||

// console.log(2 == "2" || "Barış" == "Hakan"); //TRUE

//KOŞULLAR

//if
// const a = 20;
// const b = "20";
// // if (a == b) {
// //   console.log("Değerler eşit");
// // }

// if (a === b) {
//   console.log("değerler eşit");
// } else {
//   console.log("değerler eşit değildir");
// }

// const process = "3";
// if (process === "1") {
//   console.log("İşlem 1");
// } else if (process === "2") {
//   console.log("İşlem 2");
// } else if (process === "3") {
//   console.log("İşlem 3");
// } else if (process === "4") {
//   console.log("İşlem 4");
// } else {
//   console.log("Hatalı giriş");
// }

//switch case methodu
// const process = 3;

// switch (process) {
//   case 1:
//     console.log("İşlem 1");
//     break;
//   case 2:
//     console.log("İşlem 2");
//     break;
//   case 3:
//     console.log("İşlem 3");
//     break;
//   default:
//     console.log("Yanlış işlem seçtiniz");
// }

//Fonksiyonlar

// function merhaba() {
//   console.log("Merhaba");
// }

// merhaba();
// merhaba();

// function user(name, age) {
//   console.log(`Merhaba ${name}, ${age} yaşındasın.`);
// }

// user("Barış", 31);
// user("Varol", 36);

// function user(name = "Bilgi Yok", age = "Bilgi yok") {
//   console.log(`Merhaba ${name}, ${age} yaşındasın.`);
// }

// user("Barış", 31);
// user();

// function kare(a) {
//   return a * a;
// }

// console.log(kare(2) + 1);

// DÖNGÜLER

// let i = 0;

// while (i < 10) {
//   console.log("Deneme" + i);
//   i++; //i=i+1
// }

// let i = 0;

// while (i < 10) {
//   i++; //i=i+1
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log("Deneme" + i);
//   }
// }

// do-while döngüsü
// let i = 10;
// do {
//   console.log("Deneme " + i);
//   i++;
// } while (i < 10);

//ASAL SAYI DENEME;
// let sayi = 7;
// let isAsal = true;

// for (let index = 1; index < 7; index++) {
//   if (sayi % index === 0) {
//     console.log("Sayi asal değildir.");
//     isAsal = false;
//   } else {
//     console.log(true);
//   }
// }

//for döngüsü

// const langs = ["Python", "C++", "Javascript", "Go"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i].length);
// }

// langs.forEach(function (lang, i) {
//   console.log(lang, i);
// });

// const users = [
//   {
//     name: "Barış",
//     age: 31,
//   },

//   {
//     name: "Hakan",
//     age: 25,
//   },

//   {
//     name: "Varol",
//     age: 23,
//   },
//   {
//     name: "Ersan",
//     age: 25,
//   },
// ];

// users.sort(function (a, b) {
//   return a.age - b.age;
// });
// users.map(function (user) {
//   console.log(user.name, user.age);
// });

// let a = prompt("Bir yazı girin");
// console.log(a);
// console.log(typeof a);

// let sayi = Number(prompt("Faktoriyeli girilecek olan sayıyı yazın:"));
// let toplam = 1;
// if (sayi > 0) {
//   for (let i = 1; i <= sayi; i++) {
//     toplam = toplam * i;
//     console.log(toplam);
//   }
// } else if (sayi === 0) {
//   console.log(toplam);
// } else {
//   console.log("Positif bir sayı girin!");
// }

// let sayi = Number(prompt("Sayı:"));
// let toplam = 0;
// for (let i = 0; i < sayi; i++) {
//   if (sayi % i === 0) {
//     toplam += i; //toplam = toplam + i
//     console.log(i);
//   }
// }
// if (toplam === sayi) {
//   console.log("Mükemmel sayıdır.");
// } else {
//   console.log("SAYI MÜKEMMEL DEĞİLDİR.");
// }
