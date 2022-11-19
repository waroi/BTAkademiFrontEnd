// METHODS
//1-String Methodları

// let value;
// const firstName = "Hürkan";
// const lastName = "Ünlü";
// const department = "Yazılım";
// const salary ="10000";

// value = firstName + lastName;  //Boşluksuz
// value = firstName + " " + lastName;  //Boşluklu

// value = firstName;
// value += " " + lastName + " " + department;
// value = firstName.length;
// value = firstName.toLowerCase();  // Tüm karakterleri küçük harfe dönüştüür.
// value = firstName.toUpperCase();  // Tüm karakterleri büyük harfe dönüştürür.
// value = firstName[2];
// value = firstName[firstName.length - 1]; //Array'de kaç karakter varsa sodaki karakteri verir.
// value = firstName.indexOf("1");
// value = lastName.includes("a");
// value = firstName.concat(" ", lastName, " ", " Deneme").toLowerCase;  //stringleri birleştirme
// value =
//  "İsim: " + firstName +
//   "\nSoyisim: " + lastName + 
//   "\nDepartment: " + department + 
//  "\nÜcret: " + salary;

  //template literal
// value = `
// İsim: ${firstName} 
// Soyisim: ${lastName}
// Departman: ${department}
// Ücret: ${salary}`

// document.body.innerHTML = value;

// console.log(value);
// console.log(typeof value);


//2-Array Methodları

// let value;
// const numbers = [45, 78, 34, 79, 23, 5];
// const langs = ["Phyton", "c++", "Javasript"];

// value = numbers.length;  //Kaç eleman olduğunu gösterir.
// value = numbers[3];  //4. eleman(79) gelir.
// value = numbers[numbers.length - 1]; //son elemanı verir.
// numbers.push(200); //yeni eleman ekler.
// value = numbers;  //eklenen sayıyla beraber yeni dizi geldi.

// numbers.pop();  //İsteenen sayıyı siler.
// numbers.shift();  //Baştaki sayıyı siler.
// value=numbers; 

// value = numbers.sort();  //alfabetik sıralama yapar.
// value = numbers.sort(function(x,y) {
//    return x - y; // Küçükten büyüğe sıralama
// })

// value = numbers.sort(function(x,y) {
 //    return y - x; // Büyükten küçüğe sıralama
// })

// value = numbers.indexOf(23);  //4 olarak sırasını gösterir.
// value = numbers.indexOf(25); //Dizide olmadığı için -1 yazacak.
// value = numbers.includes(7); //listede var mı yok mu varsa True yoksa False yazar.

// console.log(value);
// console.log(typeof value);

//3-Objects Props.

// let value;
// const user = {
//    name: "Hürkan Ünlü",
//   age: 30,
//     email: "hurkanunlu@gmail.com",
//    langs: ["english", "turkish", "spanish"],
//     adress: {
//         city: "İstanbul",
//         county: "Maltepe",
//         street: "Emniyet",
//     },
//     workStatus: function() {
//        console.log("Calisiyor.");
//        //return "Calisiyor.";
//     },
// };

// value = user.adress.city;
// value = user.email;
// value = user.workStatus();

// console.log(value);
// console.log(typeof value);


//Zaman Objesi

// let now = new Date();
// value = now.getFullYear();
// value = now.getMonth();
// value = now.getTime();
// value = now.getDate();
// value = now.getDay();
// value = now.toLocaleDateString();

// console.log(value);
// console.log(typeof value);


// Karşılaştırma Operatörleri  (Tamamının sonucu true veya false döner.)

// == Eşittir.  a == b
// === Hem türü hem de değeri eşittir.  a === b
// != Eşitdeğildir.  a != b
// !== Hem türü hem de değeri eşit değildir.  a !== b
// > Büyüktür.
// < Küçüktür.
// >= Büyük eşittir.
// <= Küçük eşittir.


// And Operatörü: (&&)  VE

// console.log((2 == "2")&&("Barış" == "Hakan")); // (true&&false) --> FALSE gelir.(hepsi true olmadan true gelmez.)

// And Operatörü: (||)  VEYA

// console.log((2 == "2")||("Barış" == "Hakan")); // (true&&false) --> TRUE gelir.(birinin true olması yeterli.)


//Koşullar 

// If (Sonucu True veya False olmalıdır.)

// const a = 20;
// const b = "20";
// if (a == b) {
//     console.log ("Değerler eşit.");
// } 
// else {
//     console.log("Değerler eşit değil");
// }


// const process = "3";
// if (process ==="1") {
//    console.log("işlem 1");
// }
// else if (process === "2") {
//     console.log("işlem 2");
// }
// else if (process === "3") {
//     console.log("işlem 3");
// }
// else if (process === "4") {
//     console.log("işlem 4");
// }
// else {
//     console.log("Yanlış işlem seçtiniz.");
// }


//Switch Case

// const process = "2";

// switch(process) {
//     case 1:
//         console.log ("işlem 1");
//         break;  //şart sağlandıysa koşuldan çık.
//    case 2:
//         console.log ("işlem 2"); 
//         break;  //şart sağlandıysa koşuldan çık. 
//     case 3:
//         console.log ("işlem 3");
//         break; //şart sağlandıysa koşuldan çık.
//     default:
//         console.log("Yanlış işlem seçtiniz.");   // Tüm şartlar sağlandığı için sadece sonuç olarak bu satır çıkar.   
// }

//Fonksiyonlar (Functions)

// function merhaba() {
// console.log("Merhaba");
// }

//merhaba();
//merhaba();

// function user(name, age) {    // Default yazacak.
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user ("Varol", 36);
// user("Hürkan", 30);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {   // Default yerine oşken bilgi yok yazacak.
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user ("Varol", 36)  //tüm bilgiler var
// user ("Varol");  //age:bilgi yok olacak
// user();    //ikisi de bilgi yok olacak

// function kare(a) {
//     return a * a;   //return bu içeride yapılan sonucu parantez dışına da taşıyabilmeyi sağlar.
// }
// console.log(kare(2) + 1);


//Döngüler

// while döngüsü //parantez içerisindeki koşul sağlandığı sürece döngü devam eder.
// let i = 0
// while (i < 10) {
//    console.log("Deneme" + i);  //i=0 ve 10dan küçük olduğu için sonsuza kadar deneme yazar.
//    i++;  // i'yi birer birer arttırır. yani 9a kadar şartı sağlayacaktır.
// }


// let i = 0;
// while (i <10) {
//     if (i ==3 || i == 5) {
//         i++;
//         continue;  //bulunduğu satırı kesip, bir sonraki döngüye devam et diyor.
//     }
//     console.log("Deneme" + i);  //3 ve 5'i görmeden devam etmiş oluyor.
//     i++;
// }

// Do While Döngüsü - Her ihtimalde en az 1 kere çalışan döngü.
// let i = 0;

// do {
//    console.log("Deneme" + i);
//     i++;
// } while (i < 10);


// For Döngüsü

// const langs = ["Phyton", "C++", "Javascipt", "Go"];

// for (let i = 0; i < langs.length; i++) {  // Bu elemanlar elemanların uzunluğu kadar bir döngüde dönsün.
//    console.log(langs[i]); //[i]den sonra.length koyarsak kaç karakter uzunluğunda olduklarını öyleyen bir döngü olur.
// }

// const langs = ["Phyton", "C++", "Javascipt", "Go"];

// langs.forEach(function(lang, i) {
//    console.log(lang, i);
// });


// const users = [
//     { name: "Varol", age:30 },
//     { name: "Hakan", age:25 },
//     { name: "Barış", age:35 },
//     { name: "Ersan", age:20 },
// ];

// //map içerisine bir fonksiyon alıp array içerisindeki elemanları forEach gibi alabilir.

// const names = users.map(function(user) {
//     return user.name; // names = ["Hürkan", "Ayşe", "Fatma", "Ali"] şeklinde bir sonuç verir.
// });

// names.map(function(a) {
//     console.log(a);
// })

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



// let girdi = Number(prompt("Bi sayı girin"));
// let toplam = 0;

// for (let i = 2; i < girdi; i++) {
//    if (girdi %i == 0){
//     toplam++;
//    }
// }

// if(toplam == 0) {
//     console.log ("Girilen sayı bir asal sayıdır.");
// }else {
//     console.log ("Girilen sayı bir asal sayı değildir.");
// }



















