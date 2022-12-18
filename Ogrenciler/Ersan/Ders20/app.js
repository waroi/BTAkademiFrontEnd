function x2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
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
