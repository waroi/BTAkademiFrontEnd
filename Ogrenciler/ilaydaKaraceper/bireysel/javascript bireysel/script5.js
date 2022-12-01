//Fonksiyonlar

//  function merhaba (){
//     console.log("merhaba")
//  }

//  merhaba(); //dediğimizde fonksiyonu çalıştır demiş oluyoruz!!

//  merhaba();
//  merhaba();
//  merhaba(); 


// function merhaba(name,age){

//     console.log(`isim: ${name} Yaş: ${age}`);
// }

// merhaba("Levent", 37);
// merhaba("Aslı", 23);
// merhaba("Yasemin", 28);


function yasHesapla(dogumYili) {
    return 2021 - dogumYili;
}

let ageSamet = yasHesapla(1990);
let ageMehmet = yasHesapla(2000);
let ageCagla = yasHesapla(2005);

// console.log(ageSamet);
// console.log(ageMemet);
// console.log(ageCAgla);

function ehliyetAlabilmeDurumu(dogumYili, isim){;
let yas = yasHesapla(dogumYili);
let ehliyet = 18 - yas;

if (ehliyet > 0) {
    console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`);
}
else {
    console.log("ehliyet alabilirsiniz.");
}
}
ehliyetAlabilmeDurumu(2020, "Esra");