// String Methodları
// let value;
// const firstName = "Varol";
// const lastName = "Maksutoglu";
// const department = "Yazılım";
// const salary = "10000";

// value = firstName + lastName;
// value = firstName + " " + lastName;

// value = firstName;
// value += " " + lastName + " " + department;
// value = firstName.length;
// value = firstName.toLowerCase();
// value = firstName.toUpperCase();
// value = firstName[2];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("l");
// value = lastName.includes("a");
// value = firstName.concat(" ", lastName, " Deneme").toLowerCase();
// value =
//   "İsim: " +
//   firstName +
//   "\nSoyisim: " +
//   lastName +
//   "\nDepartman: " +
//   department +
//   "\nMaaş: " +
//   salary;
// // Tempalte Literal - Ters tek tırnak
// value = `
// İsim: ${firstName}
// Soyisim: ${lastName}
// Departman: ${department}
// Maaş: ${salary}`;

// value =
//   "<ul>" +
//   "<li>" +
//   firstName +
//   "</li>" +
//   "<li>" +
//   lastName +
//   "</li>" +
//   +"<li>" +
//   department +
//   "</li>" +
//   +"<li>" +
//   salary +
//   "</li>" +
//   "</ul>";

// value = `
// <ul>
//   <li>
//     ${firstName}
//   </li>
//   <li>
//     ${lastName}
//   </li>
//   <li>
//     ${department}
//   </li>
//   <li>
//     ${salary}
//   </li>
// </ul>
// `;

// document.body.innerHTML = value;

// console.log(value);
// console.log(typeof value);

// Array Methodları
// let value;
// const numbers = [45, 78, 34, 79, 23, 5];
// const langs = ["Python", "C++", "Javascript"];

// value = numbers.length;
// value = numbers[3];
// value = numbers[numbers.length - 1];
// // numbers.push(200);
// // value = numbers;

// // numbers.pop();
// // numbers.shift();
// // value = numbers;

// value = numbers.sort();
// value = numbers.sort(function (x, y) {
//   return x - y; // Küçükten Büyüğe Sıralama
// });

// value = numbers.sort(function (x, y) {
//   return y - x; // Byüykten Küçüğe Sıralama
// });

// value = numbers.indexOf(25);
// value = numbers.includes(7);

// console.log(value);
// console.log(typeof value);

// Object Props.

// let value;
// const user = {
//   name: "Varol Maksutoglu",
//   age: 36,
//   email: "varolmaksutoglu@yandex.com",
//   langs: ["Türkçe", "İngilizce"],
//   adress: {
//     city: "İstanbul",
//     street: "Şahika",
//     No: "33",
//   },
//   workStatus: function () {
//     console.log("Çalışıyor");
//     // return "Çalışıyor";
//   },
// };

// // value = user.adress.city;
// // value = user.email;
// // value = user.workStatus();

// // Zaman Objesi

// let now = new Date();
// value = now.getFullYear();
// value = now.getMonth();
// value = now.getTime();
// value = now.getDate();
// value = now.getDay();
// value = now.toDateString();

// console.log(value);
// console.log(typeof value);

// Karşılaştırma Operatörleri

// == Eşittir : a == b
// === Hem türü hemde Değeri eşit : a === b
// != Eşit değildir
// !== Hem türü hemde Değeri eşit değildir
// > Büyüktür
// < Küçüktür
// >= Büyük Eşit
// <= Küçük Eşit

// console.log(5 != "5");

// And Operatörü: &&

// console.log(2 == "2" && "Barış" == "Hakan");

// Or Operatörü: ||

// console.log(2 == "2" || "Barış" == "Hakan");

// Koşullar

// if

// const a = 20;
// const b = "20";

// // if (a == b) {
// //   console.log("Değerler eşit");
// // }

// if (a === b) {
//   console.log("Değerler eşit");
// } else {
//   console.log("Değerler eşit değil");
// }

// const process = "2";

// if (process === "1") {
//   console.log("işlem 1");
// } else if (process === "2") {
//   console.log("işlem 2");
// } else if (process === "3") {
//   console.log("işlem 3");
// } else if (process === "4") {
//   console.log("işlem 4");
// } else {
//   console.log("Yanlış işlem seçtiniz");
// }

// Switch Case

// const process = 2;

// switch (process) {
//   case 1:
//     console.log("işlem 1");
//     break;
//   case 2:
//     console.log("işlem 2");
//     break;
//   case 3:
//     console.log("işlem 3");
//     break;
//   default:
//     console.log("Yanlış işlem seçtiniz");
// }

// Fonksiyonlar

// function merhaba() {
//   console.log("Merhaba");
// }

// merhaba();
// merhaba();

// function user(name, age) {
//   console.log(`isim: ${name} \nYaş: ${age}`);
// }

// user("Varol", 36);
// user("Esma", 20);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`isim: ${name} \nYaş: ${age}`);
// }

// user("Varol");
// user();

// function kare(a) {
//   return a * a;
// }

// console.log(kare(2) + 1);

// Döngüler

// let i = 0;
// while (i < 10) {
//   console.log("Deneme " + i);
//   i++; // i=i+1
//   // i+=2 // i=1+2
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log("Deneme " + i);
//   i++; // i=i+1
//   // i+=2 // i=1+2
// }

// Do While Döngüsü

// let i = 10;

// do {
//   console.log("Deneme " + i);
//   i++;
// } while (i < 10);

// For Döngüsü

// const langs = ["Python", "C++", "Javascript", "Go"];

// // for (let i = 0; i < langs.length; i++) {
// //   console.log(langs[i]);
// // }

// langs.forEach(function (lang, i) {
//   console.log(lang, i);
// });

// const kisiler = [
//   { name: "Varol", age: 36 },
//   { name: "Hakan", age: 20 },
//   { name: "Barış", age: 25 },
//   { name: "Ersan", age: 23 },
// ];

// const names = users.map(function (user) {
//   return user.name; // names = ["Varol", "Hakan", "Barış", "Ersan"]
// });

// names.map(function (a) {
//   console.log(a);
// });

// kisiler.sort(function (f, z) {
//   return f.age - z.age;
// });

// kisiler.map(function (user) {
//   console.log(user.name, user.age);
// });

// let a = prompt("Bir yazı girin");
// console.log(a);
// console.log(typeof a);

// let sayi = Number(prompt("Bir sayı giriniz."));
// let faktoriyel = 1;

// if (sayi >= 0) {
//   for (let i = 1; i <= sayi; i++) {
//     faktoriyel = faktoriyel * i;
//   }
// }

// console.log(faktoriyel);

// 6 bir mükemmel sayıdır = 1+2+3 = 6

// let sayi = Number(prompt("Bir sayı giriniz."));
// let toplam = 0;
// for (i = 1; i < sayi; i++) {
//   if (sayi % i == 0) {
//     toplam = toplam + i; // 1+2+3
//   }
// }
// if (sayi == toplam) {
//   console.log(sayi + " Sayısı Mükemmel Sayıdır");
// } else {
//   console.log(sayi + " Sayısı Mükemmel Sayı Değildir");
// }

// Örneğin 10 sayısı 1, 2, 5 ve 10 sayıları ile bölünebilirken,
// 11 sayısı sadece 1 ve 11 yani kendisi ile bölünebilir.
// Pozitif tam sayılar kümesinde bu şekilde kendisinden ve 1'den başka böleni olmayan birçok sayı vardır.
// Bu özellikteki sayılara “asal sayı” denir.

// let sayi = Number(prompt("Bir sayı giriniz."));
// let toplam = 0;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     toplam++;
//   }
// }
// if (toplam == 0) {
//   console.log("Girilen sayı asaldır.");
// } else {
//   console.log("Girilen sayı asal değildir.");
// }
