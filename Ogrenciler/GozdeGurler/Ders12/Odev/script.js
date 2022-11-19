
//SORU 2

let islem = prompt("Yapmak istediğiniz işlemi seçiniz.(+, -, *, /)")

let sayi1 = prompt("İşlem yapmak istediğiniz ilk sayıyı giriniz.")
let sayi2 = prompt("İşlem yapmak istediğiniz ikinci sayıyı giriniz.")


switch (islem) {
    case '+':
        console.log(sayi1 + sayi2);
        break;
    case '-':
        console.log(sayi1 - sayi2);
        break;
    case '*':
        console.log(sayi1 * sayi2);
        break;
    case '/':
        console.log(sayi1 / sayi2);
        break;
    default:
        console.log("Hatalı işlem seçtiniz!")
        break;  
}

//SORU 1

// let bilgisayar = Math.floor(Math.random()*10) + 1;


// let tahmin = prompt("1-10 arasındaki sayı tahmininiz?");
// let tahminSayisi=1;
 
// while(tahmin != bilgisayar && tahminSayisi < 6)
// {
// 	tahminSayisi++;
// 	if (tahmin>bilgisayar)
// 		alert("Lütfen daha küçük bir sayı giriniz!");
// 	else if (tahmin<bilgisayar)
// 		alert("Lütfen daha büyük bir sayı giriniz!");
	
// 	tahmin = prompt("Lütfen 1 ile 10 arasında başka bir tahmin yapınız");
// }
 
// if (tahminSayisi<=2)
// 	alert("Tebrikler! "+(tahminSayisi)+". denemede sayıyı buldunuz.Puanınız 10/10.");
// else if (tahminSayisi>=3 && tahminSayisi<6) {
//     alert("Tebrikler! "+(tahminSayisi)+". denemede sayıyı buldunuz.Puanınız 5/10.")
// } else {
//     alert("Bilemediniz :( Doğru cevap "+bilgisayar+" olacaktı Puanınız 0/10");
// }
	



//DENEMELER
// while (tahmin != bilgisayar) {
//     tahminSayisi++;
//     if (tahmin) {
        
//     }
// }

// if (tahmin == bilgisayar) {
//     console.log("Bildiniz!");
// } else if (tahmin<bilgisayar){
//     tahminSayisi++;
//     console.log("Yukarı");
    
// } else if (tahmin>bilgisayar) {
//     tahminSayisi++
//     console.log("Aşağı");
// }

// if (tahminSayisi <=2 ) {
//     console.log("Puanınız 10/10");
// } else if (tahminSayisi >=3 && tahminSayisi <=5) {
//     console.log("Puanınız 6/10");
// } else {
//     console.log("Puanınız 4/10")
// }
