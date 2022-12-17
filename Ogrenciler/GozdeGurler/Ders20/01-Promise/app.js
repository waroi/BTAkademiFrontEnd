// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         //olumlu
//         resolve("datayi aldik " + data);
//       } else {
//         //olumsuz
//         reject(new Error("Datayi alamadıik,string olmalı"));
//       }
//     }, 3000);
//   });
// }

// getData("5")
//   .then((res) => console.log("Gelen değer: " + res))
//   .catch((err) => console.log(err));

// setTimeout(function () {
//   console.log("Merhaba");
// }, 2000);

function x2(number) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (typeof number === "number") {
        res(number * number);
      } else {
        rej(new Error("Lütfen sayi girin"));
      }
    }, 2000);
  });
}

x2(5)
  .then((res) => console.log(res * 2)) //Burdan gelen sonucu res2 de tutacak.
  .then((res2) => (res2 < 100 ? "kaldın" : "geçtin"))
  .then((res3) => console.log(res3))
  .catch((err) => console.log(err));
