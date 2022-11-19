// Önce konsolda işlemler numaralarla gösterilir kullanıcı bir işlem seçtiğinde iki adet sayı girmesi istenir 
// ve bu işlem uygulanarak kullanıcıya sonuç gösterilir.

// 1: toplama
// 2: cikarma
// 3: carpma
// 4: bolme
// Lutfen bir islem seciniz: 

// 1. ilk prompta islemi ogren
// 2. ilk sayiyi al
// 3. ikinci sayiyi al
// 4. islemi sayilara uygula ve usera console log ile goster


// validasyonlar:
// 1. prompt
// kullanici sadece 1-4 arasinda sayi girebilir

// 2. prompt
// kullanici sadece sayi girebilir

// 3. prompt
// kullanici sadece sayi girebilir

let secenek = prompt("1: toplama\n2: cikarma\n3: carpma\n4: bolme\nLutfen bir islem seciniz:");
let sayi1 = Number (prompt("1. sayi"));
let sayi2 = Number (prompt("2. sayi"));

let islem;

if (secenek == 1){
    
    console.log("sonuc toplama");
    islem = sayi1 + sayi2
}

else if(secenek == 2){
    
    console.log("sonuc cikarma");
    islem = sayi1 - sayi2
}


else if(secenek == 3){
    
    console.log("sonuc carpma");
    islem = sayi1 * sayi2
}

else if(secenek == 4){
    
    console.log("sonuc bolme");
    islem = sayi1 / sayi2
}

else {
    console.log("Lutfen 1-4 arasi bir sayi giriniz");
}

console.log(islem);

