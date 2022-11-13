let tahminSayi = 0;
let puan = 100;
let rastgeleSayi = Math.floor(Math.random() * 100);
let tahmin;

function calistir() {
  alert(`
Oyun Başlıyor...
Başlamadan önceki toplam puanınız: ${puan}

*** 0 ile 100 arasındaki bir sayıyı tahmin etmeye çalış.
*** Konsol ekranındaki ne yöne gitmen gereken uyarıları dikkate almayı unutma!
`);
  while (true) {
    tahmin = Number(
      prompt(`
  Kalan tahmin hakkı: ${20 - tahminSayi}
  Tahmin: `)
    );
    if (rastgeleSayi == tahmin) {
      alert(`Tebrikler sayıyı buldunuz!
          Tahmin sayısı: ${tahminSayi}
          Puan: ${puan}
          `);
      break;
    } else {
      tahminSayi++;
      puan -= 5;

      if (rastgeleSayi < tahmin) {
        console.log("Aşağı");
      } else if (puan == 0) {
        alert(`Maalesef sayıyı gerekli puan içinde tahmin edemediniz
      Tahmin sayısı: ${tahminSayi}
      Puan: ${puan}
      `);
        break;
      } else {
        console.log("Yukarı");
      }
    }
  }
}
