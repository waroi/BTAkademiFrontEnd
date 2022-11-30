// // /* Değişkenler

// // // var password;
// // //console.log(password)

// // //password = "ilaydeon"
// // //console.log(password)

// // yas = 25;
// // console.log(yas)

// // //Değişken Tanımlama Kuralları

// // //Değişken isimleri rakam ile başlayamaz.

// // yas1 = 30;

// // //Değişken isimlerinde komut isimleri kullanılmaz

// // // var if gibi XX 

// // //Eğer Değişken Adımız Birden Fazla Kelimeden Oluşutorsa Camel Casing Veya _ kullanılır

// // // var adSoyad; adSoyad = "ilayda karaçeper" console.log(adSoyad)

// // //Türkçe karakter kullanılamaz değişken isimlerinde


// // // sabit değişken tanımlamak için var yerine const kullanılır
// // //const email = "123@gmail.com"; sabittir değiştirilemez sonradan başka bir mail tanımlansa da.



// // //DEĞİŞKEN TÜRLERİ

// // //Primitive Types

// // //String

// // let firstName = "Levent";
// // console.log(typeof firstName)

// // //Number

// // let age = 30;
// // console.log(typeof age)

// // //Boolean

// // let kredi_kullanimi = false;
// // console.log(typeofkredi_kullanımı)

// // //undefined

// // let phone;
// // console.log(typeof phone)

// // //Reference Types : Objects

// // //Array

// // let liste = ["Aslı", "Sertaç", "Kerem"] 
// // console.log(typeof liste)

// // // Object Literals

// // let adress = {
// //     city: "İstanbul"
// //     country: "Türkiye"

// // }
// // console.log(typeof adress)

// // var hesapla = function(){
// //     return 0;
// // }
// // console.log(typeof hesapla) */


// // //OPERATÖRLER 4'E AYRILIR

// // let veri;
// // const a=20;
// // const b=10;
// // const c=5;
// // let d=3;


// // // 1. Aritmetik Operatörler (Aslında bizim matematikte kullandığımız operatörledir)

// // // veri = a+b;
// // // veri = a-b;
// // // veri = a*b;
// // // veri = a/b;
// // // veri = ++d;
// // // veri = --d;
// // // veri = d--;
// // // console.log(veri);
// // // console.log(typeof veri);

// // // 2. Atama Operatörleri

// // veri = a;
// // veri +=a; // veri = veri+a demek
// // veri -=a; // veri = veri-a demek
// // veri *=a; //veri = veri * a demek
// // veri /=a; //veri = veri/ a demek
// // veri %=a; // veri = veri % a yani modunu bölümünden kalanı verir demek

// // // 3. Karşılaştırma Operatörleri

// // veri = a==b; //Karşılaştırma Operatöreri genelde Boolean cinsindendir, a, b'ye eşit mi diye soruluyo burada, cevabı false olarak console'a geliyor sonrasında demek
// // veri = b==c;
// // veri = 5==="5"; //Tür olarak aynı değiller, üç eşittir kullanırsan string mi number mı ona bakıyor demek
// // veri = a!=b; // a, b'ye eşit değildir demek doğru çıkacak console'da
// // veri = a!==b; //türleri eşit ve doğru true
// // veri = a>b;
// // veri = b<c;
// // veri = 5 <= 5;
// // veri = b <= c;

// // // 4. Mantıksal Operaörler( && (and yani ve operatörü), (|| or yani veya demek), (! not demek trueyu false'a dönüştürür))

// // // && (and)
// // veri = (a>b) && (a>c)

// // // || (or)
// // veri = (b>a) || (a>c)

// // // ! (not)

// // veri = !(a<b)


// // DATE OBJECT

// let zaman = new Date();
// console.log(zaman);
// console.log(typeof zaman);


// // Get Methods

// console.log(zaman.getMonth());
// console.log(zaman.getDate());
// console.log(zaman.getFullYear);
// console.log(zaman.getDay);
// console.log(zaman.getHours);
// console.log(zaman.getMinutes);
// console.log(zaman.getSeconds);
// console.log(zaman.getMilliseconds);

// // Set Methods

// zaman.setDate(25);
// zaman.setMonth(3);
// zaman.setFullYear(2024);
// zaman.setHours(20);


// //NUMBERS

// let veri;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = parseInt("5c");
// veri = parseInt("c5");
// veri = isNaN("c5");
// veri = isNaN("c5");

// var sayi = 15.758947593;
// veri = sayi.toPrecision(5);
// veri = sayi.toFixed(6);

// veri = Math.PI;
// veri = Math.round(3.5);
// veri = Math.round(3.2);
// veri = Math.ceil(3.2);
// veri = Math.floor(8.3);
// veri = Math.pow(3.3);
// veri = Math.sqrt(81);
// veri =Math.abs(-50);
// veri = Math.min(1,3,5,7,9,10);
// veri = Math.max(5,6,3,7,35,12,9);
// veri = Math.floor(Math.random()*100+1);

//STRINGS

const firstname = "İlayda";
const lastname = "Karaçeper";
const age = "22";
let hobbies = "formula1 sinema spor kitap yazılım";

let veri;

// (string birleştirme)

veri = firstname+ " " +lastname;
veri = "İlayda";
veri += " Karaçeper";

veri = 'Benim adım' + ' ' + firstname + ' soyadım ' + lastname + ' yaşım ' + age;


// CONCAT metodu ile birleştirme

//veri = firstname.concat(' ',lastname);

//veri = veri.toLocaleUpperCase();
//veri = veri.toLocaleLowerCase();

//veri = veri.substring(3,11);

//veri = veri.slice(1,8);

//veri = veri.indexOf("h"); //içinde kaç tane h harfi var ona bakıyo


// veri = veri.replace('İlayda', 'Teoman')

// veri = veri.length;

// veri = hobbies.split(' ');

// console.log(veri);
// console.log(typeof veri);

//ARRAYS

let names = ["arda", "kerem", "aslı", "mert"];
let years = [1990, 1980, 2000, 2005];
let mix = ["arda", "yılmaz", 1990, null,undefined, ["programlama", "futbol"]];


console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

// get array item

console.log(names[3]);

// set array item (yerine başka bir öğeyle değiştirme)

names[0]="levent";
names[names.length]="mehmet";



// add item

//names.push("Eda");
//console.log(names); //sona edayı ekledi

//names.unshift("Eda");
//console.log(names); //başa edayı ekledi

//remove item

//years.pop(); //dizi içindeki son elemanı siler
//console.log(years);

//years.shift(); //dizi içindeki ilk indexini ilk elemanını siler
//console.log(years);

//indexOf (bir indexi aramak istediğimizde var mı yok u veya kaçıncı sırada vs gibi şeylere indexOf ile bakıyoruz)


// let index = names.indexOf("levent")
// console.log("index :" + index);

// names.reverse(); //isimleri karışık sıraladı
// console.log(names);

// years.sort();
// console.log(years); // doğum yıllarını küçükten büyüğe sıraladı 


// names.sort();
// console.log(names); //dizi elemanlarını alfabeye göre sıraladı...:)))


// names.splice(2,0, "ahmet"); //2. indexten başlayıp herahngi bir indexi silmeden ahmet öğesini ekle demiş oluyoruz
// console.log(names);


// names.splice(2,1, "selin"); //2. indexten başlayıp bir indexi silerek selin öğesini ekle demiş oluyoruz
// console.log(names);