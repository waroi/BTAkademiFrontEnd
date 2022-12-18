//Switch Koşul Yapısı

// let islem = 1;
// switch (islem) {
//     case 1:
//         console.log("1. nolu islem yapıldı")
//         break;
//     case 2:
//         console.log("2. nolu islem yapıldı")
//         break;
//     case 3:
//         console.log("3. nolu islem yapıldı")
//         break;

//         default:
//             console.log("bu işlem yapılmadı")
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

// }

// console.log(day);


// let hour = 16;

// switch (true) {
//     case (hour >= 6 && hour <= 12):
//         console.log("günaydıns")
//         break
//     case (hour >= 13 && hour <= 17):
//         console.log("iyi günler askom")
//         break
//     case (hour >= 18 && hour <= 24):
//         console.log("iyi ksamlar balım")
//         break


//     default:
//         console.log("yanlış zamannn")
// }


//object literals

let veri;
let user = {
    userName : "leventert",
    firstName :" Levent",
    lastName : "Ertunalılar",
    age : 37,
    hobbies : ["spor", "müzik","yazılım"],
    address : {
        city : "İstanbul",
        country : "Türkiye",
        phone : "05783783829",
    }
}

veri = user;
veri = user.firstName;

console.log(veri);
console.log(typeof user);