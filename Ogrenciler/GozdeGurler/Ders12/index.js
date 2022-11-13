//String Methodları

// let value;
// const firstName ="Varol";
// const lastName="Maksutoğlu";
// const department = "Yazılım";
// const salary ="10000";


// value = firstName + " " + lastName;

// value = firstName;
// value += " " +lastName + " " + department;
// value =firstName.length;
// value = firstName.toLowerCase();
// value=firstName.toUpperCase();

// value=firstName[2];
// value=firstName[firstName.length-1];
// value=firstName.indexOf("V");  //Değer olmayınca -1 dönüyor. 
// value=lastName.includes("M");  // true ve false dönüyor eğer içeriyor veya içermiyotsa.
// value = firstName.concat(" ", lastName," Deeneme");

// value="İsim: " +firstName + "\nSoyisim: " + lastName;

// //Template Literal
// value= `İsim: ${firstName}
// Soyisim: ${lastName}`;

// value = `
// <ul>
// <li>${firstName}</li>
// <li>${lastName}</li>
// <li>${department}</li>
// <li>${salary}</li>
// </ul>
// `

// document.body.innerHTML=value;
// console.log(value);
// console.log(typeof value);

//Array Methodları 

// let value;
// const numbers = [43,56,89,35,7];
// const langs = ["Python", "C++", "JavaScript"];

// value=numbers.length;
// value=numbers[3];

// value=numbers[numbers.length -1];

// // numbers.push(200);
// // numbers.pop();
// // numbers.shift();
// value= numbers.sort(); // stringe göre sıralar.
// value=numbers.sort((a,b) => a - b) //küükten büyüğe
// value=numbers.sort(function (a,b) {  //büyükten küçüğe
//     return b-a;
// })
// console.log(value);
// console.log(typeof value);


//Object Özellikleri

// let value;
// const user = {
//     name:"Gözde Gürler",
//     age:28,
//     email:"gzde.gurler@gmail.com",
//     langs: ["Türkçe", "İngilizce"],
//     address: {
//         city:"İstanbul",
//         street:"Sancar",
//         No:"33"
//     },
//     workStatus: function () {
//         console.log("Çalışıyor");
//         //return "Çalışıyor"
//     }
// }

// value=user.address.city;
// //value=user.workStatus();
// value=user.email;

//Zaman Objesi

// let now = new Date();
// value = now.getFullYear();
// value = now.getHours();
// value=now.getDay();
// value=now.getTime();
// value=now.toDateString();

// console.log(value);
// console.log(typeof value);

//Karşılaştırma Operatörleri Bunlar hep true /false döner

// ==Eşittir: a==b T/F döner
// === Hem türü hem değeri eşittir 
// != Eşit değildir
// !== Hem türü hem değeri eşit değildir.

// > Büyüktür
// < Küçüktür               
// >= Büyük eşit
// <= Küçük eşit

//And  &&
// ||  OR 

//Koşullar

// if 
// const a= 20;
// const b ="20";
// if (a===b) {
//     console.log("Değerler eşit"); 
// } else {
//     console.log("Değerler eşit değil")
// }

// const process =3;
// if (process==="1") {
//     console.log("İşlem 1")
// } else if (process==="3") {
//     console.log("işlem 3");
// } else {
//     console.log("Yanlış işlem seçtiniz!")
// }

//Switch Case 

// const process = 2;

// switch (process) {
//     case 1:
//         console.log("İşlem 1");
//         break;
//     case 2:
//         console.log("İşlem 2");
//         break;
//     default:
//         console.log("Yanlış işlem seçtiniz!");
// }

//Fonksiyonlar 

// function merhaba() {
//     console.log("Merhaba");
// }

// merhaba();

// function user(name,age) {
//     console.log(`isim: ${name}
// yaş: ${age}`);
// }

// user("Varol", 36);
// user("Gözde",28);

//Default değer girme

// function user(name="Bilgi Yok",age="Bilgi Yok") {
//     console.log(`isim: ${name}
// yaş: ${age}`);
// }

// user("Varol");
// user();

// function kare(a) {
//     return a*a;
// }

// console.log(kare(6) +1)


//Döngüler 

// let i=0;
// while(i<10) {
    
//     if(i==3 || i==5) {  
//         i++;
//         continue; // Devam et diğer döngüye geç
//     }
//     console.log("Deneme "+ i);
//     i++; //i=i+1

  
//    // i+=2 //i=i+2
// } //parentezin içindeki şart sağlandığı sürece dögü devam ediyor. 

//Do while 

// let i=0;
// do {
//     console.log("Deneme " +i);   //en az 1 cvp konsola yazdırmak için kullanılıyor. İllaki yazıyor do tarafını.
//     i++
// } while (i<10);


//For Döngüsü

const langs = ["Python", "C++", "JavaScript","Go"];

// for(let  i=0; i < langs.length; i++) {
// console.log(langs[i].length);
// }

//forEach

langs.forEach(function(lang,i) {
    console.log(lang,i);
})


const users= [
    {name:"Varol", age:36 },
    {name:"Hakan", age:20 },
    {name:"Ersan", age:35 },
    {name:"Gözde", age:45 },
]

const names = users.map(function (user) {
    return user.name //names = ["Varol"....]
})

names.map (function (a) {
    console.log(a);
})

/// yaşlara göre sıralama yapıcaz, onu da bir değişkenen tanımla

// let sonuc = users.sort(function(a, b) {
//     return a.age - b.age;
// });

// users.map (function(user) {
//     console.log(user.name, user.age);
// })
// console.log(sonuc);



// let a = prompt("Bir yazı girin");
// console.log(a);
// console.log(typeof a);

//let a = prompt("Bir sayı giriniz");

//2. ÇÖZÜM

// let sonuc=1
// if (a==0) {
//     console.log(`0!: 1'dir`)
// } else {
   
//     for (let i = 1; i <= a; i++) {
    
//     sonuc = sonuc * i;
       
//     }
// }
// console.log(sonuc);


//1.ÇÖZÜM
// let sonuc=1
// for (let i = 1; i <= a; i++) {

//     sonuc = sonuc * i;
   
// }
// console.log(sonuc);


//Mükemmel Sayı -- 1+2+3=6
// let a = prompt("Bir sayı giriniz");   5

// let toplam = 0;
// for (let i = 1; i < a ; i++) {
//    if (a % i == 0 ) {
//     toplam = toplam +i;
//    }
  
//    if (a == toplam) {
//     console.log("Mükemmel Sayı")
//    }  else {
//     console.log("Mükemmel Sayı Değil")
//    }
    
// }

//Asal Sayı

let a = prompt("Bir sayı giriniz");

let toplam=0;

for(let i=2; i< a; i++) {
    if (a % i == 0) {
        toplam = toplam +1;
    }
}

if (toplam==0) {
    console.log("Asal Sayıdır")
} else {
    console.log("Asal Sayı Değildir!")
}


