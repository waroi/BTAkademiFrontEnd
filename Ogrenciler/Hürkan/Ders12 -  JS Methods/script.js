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

// value = numbers.indexOf(23);  //4 olara sırasını gösterir.
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

const process = "2";

switch(process) {
    case 1:
        console.log ("işlem 1");
        break;  //şart sağlandıysa koşuldan çık.
    case 2:
        console.log ("işlem 2"); 
        break;   
    case 3:
        console.log ("işlem 3");
        break;
    default:
        console.log("Yanlış işlem seçtiniz.");    
}







