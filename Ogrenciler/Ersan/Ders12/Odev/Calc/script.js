let islem = Number(
  prompt(
    "Lütfen yapmak istediğiniz işlemin kodunu giriniz: 1-Toplama, 2-Çıkarma, 3-Çarpma, 4-Bölme",
    "1"
  )
);
if (islem < 1 || islem > 4) {
  alert("Hatalı bir işlem kodu girdiniz, hesap makinesi kendini imha ediyor!");
}
let sayi1 = Number(
  prompt("Lütfen işlemde kullanacağınız ilk sayıyı giriniz!", "0")
);
let sayi2 = Number(
  prompt("Lütfen işlemde kullanacağınız ikinci sayıyı giriniz!", "0")
);

if (islem == 1) {
  let sonuc = sayi1 + sayi2;
  alert(sonuc);
} else if (islem == 2) {
  let sonuc = sayi1 - sayi2;
  alert(sonuc);
} else if (islem == 3) {
  let sonuc = sayi1 * sayi2;
  alert(sonuc);
} else if (islem == 4) {
  let sonuc = sayi1 / sayi2;
  alert(sonuc);
}
