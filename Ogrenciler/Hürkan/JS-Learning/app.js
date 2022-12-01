// console.log("sayfa yüklendi.");

// let marka;
// // marka = "audi";

// marka = "opel";  // son değer çalışır, audi çalışmaz.
// console.log(marka);

// // marka = "mercedes";
// // console.log(marka);  // ayrı bir konsol ile ayrı bir değişken çalışır, opel ile birlikte.

// let model = "astra";  //string
// console.log(marka + " " + model);

// let maxhiz = 240;   //number
// let yakitdeposu = 50;
// console.log(yakitdeposu * 5);

// let otomatik = true;  //boolean
// console.log(otomatik);

// console.log(marka + " " + model + " " + yakitdeposu + " " + "litre yakıt deposuna sahiptir." + " " + "saatte" + " " + maxhiz + " " + "km. hız yapmaktadır.");

// let = marka;
// marka = prompt("marka giriniz : ");   // konsol açıldığında bir alert ekranı çıkarıp soru sorar.
// console.log(marka);  // alert'e girilecek eğişkeni konsola yazar.

// let ad = prompt("adınızı giriniz: ");
// let no = prompt("öğrenci no giriniz: ");
// let cinsiyet = prompt("cinsiyet giriniz: ");  // erkek:true kadın:false
// let ders = prompt("ders giriniz: ");
// let not1 = prompt("1. notu giriniz: ");
// let not2 = prompt("2. notu giriniz: ");
// let ortalama = (number(not1) + number(not2))/2 ;

// console.log(no + " numaralı " + ad + "("+cinsiyet+")" + " isimli ogrencinin " + ders + " dersinden aldığı ortalama not " + ortalama + " dir.")

// operatörler

// 1-matematiksel operatörler
// + - * / %

// let x = 10;
// let y = 20;
// let z = 15;

// x++;  // 1 arttır demektir.
// console.log(x);

// x--;  // 1 azalt demektir.
// console.log(x);

// 2-karşılaştırma operatörleri

// let sonuc = x>y;
// console.log(sonuc);

// console.log(x<y);
// console.log(x>=z);
// console.log(x==z);
// console.log(x=="10");

//3-Mantıksal operatörler

// && - VE(AND)
//  true && true = true
//  true && false = false
//  false && true = false
//  false && false = false

//  || - VEYA(OR)
//  true || true = true
//  true || false = true
//  false || true = true
//  false || false = false

//  ! - DEĞİL(NOT)
//  !false = true
//  !true = false

// ---------------

// let a = prompt("sayı giriniz : ");
// let b = prompt("sayı giriniz : ");
// let c = prompt("sayı giriniz : ");

// console.log("a sayısı en büyük mü? : ", (a>b) && (a>c));
// console.log("b sayısı en büyük mü? : ", (b>a) && (b>c));
// console.log("c sayısı en büyük mü? : ", (c>a) && (c>b));

// ----------------

// koşul ifadeler!!

// let marka = "Opel";
// let model = "Astra";
// let otomatik = "yes";
// // 1- if-else statement

// if(otomatik=="yes") {
//     console.log("araç otomatiktir.");
// }else {
//     console.log("araç otomatik değildir.");
// }

// otomatik = true;

// if(otomatik) {
//     console.log(marka + " " + model + " " + otomatik);
// }

// if(10==="10") {
//     console.log("sayılar eşit");
// } else {
//     console.log("eşit değildir");
// }

// 2- switch-case statement

// 1 : manuel
// 2 : otomatik

// let vites ="1";

// if(vites=="1") {
//     console.log("araç manuel");
// } else if (vites=="2") {
//     console.log("araç otomatik");
// } else {
//     console.log("yanlış bir ifade girdiniz");
// }

// aynı örneği switch ile yapalım

// vites = "4";
// switch(vites) {
//     case "1" :
//         console.log("araç manuel");
//         break;
//     case "2" :
//     case "3" :
//         console.log("araç otomatik");
//          break;
//     default:
//         console.log("yanlış değer.");
// }

// ---------------------

// uygulama 1 = girilen doğum yılına göre ehliyet alınıp alınmayacağını
// hesaplayınız. Eğer 18 yaşınan küçükse kaç senesi kalmıştır?

// let age = prompt("Bir sayı giriniz.");

// if (age<18) {
//     console.log("ehliyet alamaz.");
//     console.log((18-age) + " " + "yılı kalmıştır.");
// } else {
//     console.log("ehliyet alabilir.");
// }

// ---------------------

// uygulama 2 = girilen ay bilgisine göre mevsim bilgisini yazınız.
// (1 ocak 2 şubat 3 mart ...)

// let ay = prompt("Bir ay giriniz:");

// switch (ay) {
//   case "12":
//   case "1":
//   case "2":
//     console.log("kış mevsimidir.");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("ilkbahar mevsimidir.");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("yaz mevsimidir.");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("sonbahar mevsimidir.");
//     break;
//   default :
//     console.log("yanlış bir mevsim girdiniz");
//   break;
// }

// -----------------

// Döngüler

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let sehirler = ["istanbul", "izmir", "ankara", "kocaeli"];
// for (let i = 0; i <sehirler.length; i++) {   //.length dizi içerisindeki eleman sayısını otomatik bulur.
//   console.log(sehirler[i]);
// }
