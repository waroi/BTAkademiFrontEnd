alert(`
İşlemler:
1- Toplam
2- Çıkarma
3- Çarpma
4- Bölme
5- Mod alma
6- Üs alma
7- Karekök alma
`);

let islemTuru = prompt("İşlem seçiniz: ");

function toplama(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı 1: "));
  sayi2 = Number(prompt("Sayı 2: "));
  return sayi1 + sayi2;
}
function cikarma(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı 1: "));
  sayi2 = Number(prompt("Sayı 2: "));
  return sayi1 - sayi2;
}
function carpma(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı 1: "));
  sayi2 = Number(prompt("Sayı 2: "));
  return sayi1 * sayi2;
}
function bolme(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı 1: "));
  sayi2 = Number(prompt("Sayı 2: "));
  return sayi1 / sayi2;
}
function modAlma(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı 1: "));
  sayi2 = Number(prompt("Sayı 2: "));
  return sayi1 % sayi2;
}

function usAlma(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı: "));
  sayi2 = Number(prompt("Kaçıncı Üssü: "));
  return Math.pow(sayi1, sayi2);
}

function karekokAlma(sayi1, sayi2) {
  sayi1 = Number(prompt("Sayı: "));
  return Math.sqrt(sayi1);
}

if (islemTuru == "1") {
  document.body.innerHTML = `<h1>Toplama İşlem Sonucu: ${toplama()}</h1>`;
} else if (islemTuru == "2") {
  document.body.innerHTML = `<h1>Çıkarma İşlem Sonucu: ${cikarma()}</h1>`;
} else if (islemTuru == "3") {
  document.body.innerHTML = `<h1>Çarpma İşlem Sonucu: ${carpma()}</h1>`;
} else if (islemTuru == "4") {
  document.body.innerHTML = `<h1>Bölme İşlem Sonucu: ${bolme()}</h1>`;
} else if (islemTuru == "5") {
  document.body.innerHTML = `<h1>Mod Alma İşlem Sonucu: ${modAlma()}</h1>`;
} else if (islemTuru == "6") {
  document.body.innerHTML = `<h1>Üs Alma İşlem Sonucu: ${usAlma()}</h1>`;
} else if (islemTuru == "7") {
  document.body.innerHTML = `<h1>Karekök Alma İşlem Sonucu: ${karekokAlma()}</h1>`;
}
