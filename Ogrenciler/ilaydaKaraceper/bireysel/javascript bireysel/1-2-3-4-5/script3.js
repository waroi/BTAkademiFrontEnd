//Switch Koşul Yapısı

// let islem = 7;

// switch (islem) {
//     case 1:
//         console.log("1 nolu islem yapıldı")
//         break;
//     case 2:
//         console.log("2 nolu islem yapıldı")
//         break;
//     case 3:
//         console.log("3 nolu islem yapıldı")
//         break;

//         default:
//             console.log("işlem yapılmadı")
// }


// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "pazar";
//         break
//     case 1:
//         day = "pazartesi";
//         break
//     case 2:
//         day = "salı";
//         break
//     case 3:
//         day = "çarşamba";
//         break
//     case 4:
//         day = "perşembe";
//         break
//     case 5:
//         day = "cuma";
//         break
//     case 6:
//         day = "cumartesi";
//         break

//     default: "bulunamadı"
// }console.log(day);



// let hour = 16;
// switch (true) {
//     case hour >= 6 && hour <= 12:
//         console.log("günaydın");
//         break

//     case (hour >= 13 && hour <= 17):
//         console.log("iyi günler");
//         break
//     case (hour >= 18 && hour <= 24):
//         console.log("iyi akşamlar");
//         break
//         default : 
//         console.log ("yanlış zaman");

// }

//OBJECT LİTERAL

// let firstName = "Levent";
// let lastName = "Ertunalılar";

// let levent = ["Levent", "Ertunalılar", 37];
let veri;
let user = {
    userName : "leventert",
    firstName : "levent",
    lastname : "ertunalılar",
    age : 37,
    hobbies : ["spor", "kitaplar"],
    address : {
        city : "ist",
        country : "tc",
        phone : "72837832",
    }
}
veri = user;
veri = user.hobbies.length;
veri = user.firstName;
veri = user.lastname;
veri = user.address;
console.log (veri);
console.log(typeof user);