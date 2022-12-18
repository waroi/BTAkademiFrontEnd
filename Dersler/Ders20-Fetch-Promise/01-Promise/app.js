function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof data === "string") {
        // Olumlu
        resolve("Datayı Aldık: " + data);
      } else {
        // Olumsuz
        reject(new Error("Datayı alamadık, string değer girin."));
      }
    }, 3000);
  });
}

// getData("5")
//   .then((response) => console.log("Gelen değer: " + response))
//   .catch((error) => console.log(error));

// setTimeout(function () {
//   console.log("Merhaba");
// }, 2000);

function x2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        // Olumlu
        resolve(number * number);
      } else {
        reject(new Error("Lütfen sayı girin"));
      }
    }, 2000);
  });
}
x2(5)
  .then((response) => response * 2)
  .then((res2) => (res2 < 100 ? "kaldın" : "geçtin"))
  .then((res3) => console.log(res3))
  .catch((error) => console.log(error));
