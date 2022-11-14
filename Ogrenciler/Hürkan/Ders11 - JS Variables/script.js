// Konsolda mesaj gösterme = console.log("Merhaba");

//Variables-Değişkenler
//1-Numbers (Sayısal İfadeler)
//var  firstNumber = 20;
//var secondNumber = 30;
//console.log(firstNumber+secondNumber);
//console.log(typeof firstNumber, secondNumber);  //number yazar.

//2-Stringler - Yazılı ifadeler  - Karakter dizileri
//var userName = "Hürkan";
//console.log(userName);
//console.log(typeof userName); //string yazar.

//3-Boolean - True/False
//var a = true;
//console.log(a);
//console.log(typeof a); //boolean yazar.

//4-null - Boş
//var a = null;
//console.log(a);
//console.log(typeof a);  //object yazar.


//OBJE TÜRLERİ

//1-Object - Nesneler
//var user = {
    // name: "Hürkan",
    //surname: "Ünlü",
    //age:30;
    //email: "hurkanunl@gmail.com", }
//console.log("user");
//console.log(typeof user); // object yazar.


//2-Array-Diziler
//var users = ["Hürkan", "Varol", "Barış", 25];
//colsole.log(users);
//console.log(typeof users); //array yazar.
//console.log(users [1]);  //Varol çıkar. çünkü veri sıralaması 0'dan başlar.
//console.log(typeof users[3]); //25'i algılar ve number yazar.


//3-Date - Tarihler
// var date = new Date();
// console.log(date);  //tarihi yazar.
// console.log(typeof date); //object yazar.


//4-Function - Fonksiyonlar
//var merhaba = function () {
//console.log ("Deneme Mesajı");
// };
//merhaba ();
//merhaba ();
//merhaba ();
//console.log(merhaba);
//console.log(typeof merhaba); //function yazar.

// var a = 10;
// var b = a;
// console.log(a, b);
// a=20;
// console.log(a,b);

//var a = {
//name:"Hürkan",
//surname:"Ünlü",
//age:30,
//email:"hurkanunlu@gmail.com",  
//};
//var b=a;
//console.log(a,b);
//a.name ="Varol";
//a.surname ="Maksutoğlu";
//console.log(a,b);

// var a =[1, 2, 3];
// var b=a;
// a.push(4);
// console.log(b);

//scope - kapsam
//function deneme () {
//vr a =10; // Functional Scope
// }
//deneme ();
//console.log(a);

//{
// let a = 10; // Blog Scope
//const b = 20; // Blog Scope
// a= 30;
//console.log(a);
//console.log(b);
// }
//console.log(a);
//console.log(b);


//Tip dönüşümleri

// let value;
//let a = 123;
//a = 1.14;
//a = function () {
//console.log("Deneme");
//};
//a = [1,2,3];
//value = string(a);
//a();

// let b = "123";
// b = "Hürkan";
// value = Number (b);  // NaN-Not a Number diyecek.(Hürkan bir number olmadığı için)
// b = "1.75";
// value = Number (b);  // Number diyecek. (1.75 bir number olduğu için.)

// value = 34 + "6";  //+ "6" string olduğu içi + birleştirici olarak çalışır ve 346 cevabını verir.
// value = 34 - "6";  // - bir çıkarma operatörü olduğu için 28 gelir.

// console.log(value);
// console.log(typeof value);


//Operatörler
// let s;
// const a = 10;
// const b = 4;
// s = a + b; // Toplama operatörü
// s = a - b; // Çıkarma operatörü
// s = a * b; // Çarpma operatörü
// s = a / b; // Bölme operatörü
// s = a % b; // Mod operatörü

// s = Math.PI;
// s = Math.round(a / b); //Duruma göre yuvarlama
// s = Math.ceil (a / b); // Her türlü yukarı yuvarlama
// s = Math.floor(a / b); // her türlü aşağı yuvarlama
// s = Math.sqrt(a); // Karesini alma
// s = Math.pow (a, b) // a üssü b'yi alma.
// s = Math.random() // 0-1 arasında random bir sayı alır.
// s = Math.random() * 100 // 0-100 arasında random bir sayı alır.
// s = Math.floor(Math.random()* 100) // 0-100 arasında random bir Tamsayı alır.

// console.log(s);
