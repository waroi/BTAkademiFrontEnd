//Konsol ekranında mesaj gösterme
// console.log("Merhaba");

//Variables - Değişkenler

//Number - Sayısal ifadeler
// var firstNumber=20;
// var secondNumber=30;
// console.log(firstNumber+secondNumber);

//Stringler - Metinsel ifadeler - Karakter Dizileri
// var userName = "Barış";
// console.log(userName);
// console.log(typeof userName);

//Boolean - True/False
// var a = true;
// console.log(a);
// console.log(typeof a);

//null - Boş
// var a = null;
// console.log(a);
// console.log(typeof a);

//Object - Nesne
// var user = {
//     name:"barış",
//     surname:"benli",
//     age:31,
//     email: "bbenli@pm.me"
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(typeof user.name);
// console.log(user.age);
// console.log(typeof user.age);

//Array - Diziler
// var users = ["Varol", "Elvin", "Barış", 10];
// console.log(users);
// console.log(typeof users);
// console.log(users[3]);
// console.log(typeof users[3]);

//Date - Tarih Objesi
// var date = new Date();
// console.log(date);
// console.log(typeof date);

//Function - Fonksiyon
// var merhaba = function(){
//     console.log("Deneme Mesajı");
// };

// // merhaba();
// console.log(merhaba);
// console.log(typeof merhaba);

//Primitive Tip
// var a = 10;
// var b = a ;
// console.log(a,b);
// a=20;
// console.log(a,b);

//Referans tip
// var a ={
//     name:"Barış",
//     surnam:"Benli",
//     age:31
// };
// var b=a;
// console.log(a,b);
// a.name="Vural";
// a.surname="Maksutoğlu";
// console.log(a,b);

//scope

// var ---> Functional Scope(kapsam) çalışır
// function deneme(){
//     var a = 10;
// };
// deneme();
// console.log(a);

//let ---> Block Scope çalışır.
// {
//     let a = 10;
// }
// console.log(a); //ERİŞİM SAĞLAMAZ

//const ---> Block Scope çalışır.
// {
//     let a=10;
//     const b=20;
//     a=30;
//     console.log(a); //ERİŞİM SAĞLAR
//     console.log(b); //ERİŞİM SAĞLAR
// }
// console.log(a); //ERİŞİM SAĞLAYAMAZ
// console.log(b); //ERİŞİM SAĞLAYAMAZ

// let value;
// let a = 123;
// a = 1.14;
// a = function () {
//   console.log("deneme");
// };
// a = [1, 2, 3];
// value = String(a);
// value = a + " bir sayıdır.";
// let b = "123";
// value = Number(b);
// value = 34 + "6";
// value = 34 - "6";
//      NOT: "+" operatörü metinsel birleştirme görevi de gördüğü için metin olarka gösterir
//      "-" operatörü aritmetiksel ifade olduğundan var olan string değerini sayısal değere
//      çevirir.
// console.log(value);
// console.log(typeof value);

//Operatörler
let s;
const a = 10;
const b = 4;
s = a + b; // TOPLAMA
s = a - b; // ÇIKARMA
s = a * b; // ÇARPMA
s = a / b; // BÖLME
s = a % b; // MOD

//MATH FONKSİYONU
s = Math.PI; // Pİ SAYISI
s = Math.round(a / b); //YUVARLAMA İŞLEMİ
s = Math.ceil(a / b); //YUKARI YUVARLAMA
s = Math.floor(a / b); //AŞAĞI YUVARLAMA
s = Math.sqrt(a); //KAREKÖK
s = Math.pow(a, b); // a sayısının b üssünü alır;
s = Math.random() * 100; //RANDOM SAYI ÜRETİR
s = Math.floor(Math.random() * 100);
s = (Math.random() * 100).toFixed(2); //KÜSÜRAT

console.log(s);
