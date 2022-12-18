// Fonksiyonlar

// function merhaba(name, age){
//     console.log(`İsim: ${name} Yaş: ${age}`);
    
// }
// merhaba("İlayda", "22");
// merhaba("Yasemin", "55");

function yasHesapla(dogumYili){
    return 2021 - dogumYili;
}

let ageSamet = yasHesapla(1990);
let agePelin = yasHesapla(2000);
let ageAla = yasHesapla(1881);

// console.log(ageSamet);
// console.log(agePelin);
// console.log(ageAla);


function ehliyetAlabilmeDurumu(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let ehliyet = 18-yas;
    if(ehliyet>0){
        console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`)
    }else{
        console.log(`${isim} ehliyet alabilirsiniz`);
    }
} ehliyetAlabilmeDurumu(2010, "Esra");
ehliyetAlabilmeDurumu(1979, "Songül");