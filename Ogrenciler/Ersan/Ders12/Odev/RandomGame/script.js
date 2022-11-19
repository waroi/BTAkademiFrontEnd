let rastgele = Math.round(Math.random() * 10);
alert(rastgele);

let tahmin = Number(prompt("Sayıyı tahmin ediniz!", "1"));

if (tahmin == rastgele) {
  alert(
    "Tebrikler sayıyı doğru tahmin ettiniz! Seçilen sayı " + rastgele + " idi!"
  );
} else {
  for (let i = 0; i < 99; i++) {
    if (tahmin > rastgele) {
      alert("Aşağı!");
      var tahmin2 = Number(prompt("Sayıyı tahmin ediniz!", "1"));
      let tahmin = tahmin2;
    } else if (tahmin < rastgele) {
      alert("Yukarı!");
      var tahmin2 = Number(prompt("Sayıyı tahmin ediniz!", "1"));
      let tahmin = tahmin2;
    } else if (tahmin == rastgele) {
      alert(
        "Tebrikler sayıyı doğru tahmin ettiniz! Seçilen sayı " +
          rastgele +
          " idi!"
      );
    }
  }
}
