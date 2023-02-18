

//Odev 
// 1- Bilgisayar aklından bir sayı tutacak kullanıcı da sürekli bu sayıyı tahmin etmeye çalışacak. 
// Bilgisayar kullanıcıyı aşağı yada yukarı diye yönlendirecek. 
// Kullanıcı sayıyı doğru tahmin ettiğinde kaç tahminde bildiyse ona göre puan verecek.

//2- Önce konsolda işlemler numaralarla gösterilir kullanıcı bir işlem seçtiğinde iki adet sayı girmesi istenir
// ve bu işlem uygulanarak kullanıcıya sonuç gösterilir.

<<<<<<< Updated upstream
					
=======












>>>>>>> Stashed changes

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

const users = [
    { name: "Varol", age: 36 },
    { name: "Hakan", age: 20 },
    { name: "Barış", age: 25 },
    { name: "Ersan", age: 23 },
  ];
  
  const names = users.map(function (user) {
    return user.name; // names = ["Varol", "Hakan", "Barış", "Ersan"]
  });
  
  names.map(function (a) {
    console.log(a);
  });

  age.map(function (a) {
    console.log(a);
  });
  

value = users.sort();
value = names.sort(function (x, y) { return x - y;});




const age = users.map(function (user) {
    return user.age;
  });

  age.map(function (a) {
    console.log(a);
  });

  value = users.sort();
value = age.sort(function (x, y) { return x - y;});




/*
<script>
  var sayilar = [50,55,45,21,14];
  var sonuc= sayilar.sort(function(a, b){return a - b});
console.log(sonuc); //Çıktı:14,21,45,50,55
</script> */



