// const process = "2";

// if (process==="1") {

//     console.log("işlem 1");

// } else if (process ==="2") {

//     console.log("işlem 2");

// } else if (process ==="3") {

//     console.log("işlem 3");

// } else if (process ==="4") {

//     console.log("işlem 4");

// } else {
//     console.log("Yanlış işlem girdiniz.")
// }


// const process ="2";

// switch (process){
//     case 1:
//         console.log("işlem -1 ");
//         break;
//     case 2:
//             console.log("işlem -2 ");
//             break;
//     case 3:
//         console.log("işlem -3 ");
//         break;
//     case 4:
//         console.log("işlem -4 ");
//         break;
//         default:
//             console.log("Yanlış İşlem sectiniz.");
// }

// fonksiyonlar
// function merhaba(){
//     console.log("merhabalar")
// }

// merhaba();
// merhaba();


// function user(name,age){
//     console.log(`isim:${name} \nYaş:${age}`)
// }


// user("varol",36);
// // user("Esma",20);

// function user(name="Bilgi Yok",age="Bilgi Yok"){
//     console.log(`isim:${name} \nYaş:${age}`)
// }



// user("Varol")

// user()



// function kare(a){
//     return a * a;
// }

// console.log(kare(2) + 1 );


// döngüler

// let i=0
// while(i<10){
//     console.log("Deneme     " + i)
//     i++ // i=i+1
// }


// let i=0

// while(i<10){

//     if (i==3 || i==5){
//         i++
//         continue;
//     }
//     console.log("Deneme     " + i)
//     i++ // i=i+1
// }

// let i=10;

// do {
//     console.log("Deneme" + 1);
//     i++;
// }while (i <10);


//  const langs=["Pyton","C++","JAvascripts","Go"];
// // for (let i=0; i< langs.length; i++){
// //     console.log(langs[i]);
// // }

// langs.forEach(function(lang,i){
//     console.log(lang,i);
// // })

// const users =[
//     {name: "Varol",age:36},
//     {name: "Hakan",age:20},
//     {name: "Barış",age:25},
//     {name: "Ersan",age:23},
// ]

// const names = users.map(function(user){
//     return user.name; //names =["varol,"hakan",barış","ersan"]
// });

// names.map(function(a){
//     console.log(a);
// })





// let sayi = prompt("Lütfen bir sayı giriniz.");
    
// let faktoriyel = 1;

// if(sayi < 0) {
//     console.log("Lütfen pozitif bir tamsayı giriniz!")
// } else{

//     for(let i = 1; i <= sayi; i++){
//         faktoriyel = faktoriyel * i;
//     }
//     console.log("Faktöriyel : " + faktoriyel);
// }





// let sayi = prompt("Lütfen bir sayı giriniz.");
// toplam=0;

// for(let i = 1; i < sayi; i++){

   
//     if(sayi %i == 0){
//         toplam = toplam+i;
//         console.log(toplam);
//     }
     
// }
//     if( toplam == sayi){
//         console.log("Mükemmel sayıyı buldunuz.")
//     }   
//     else {
//         console.log("Malesef mükemel sayı değil arkadaş")
//     }

// let sayi = prompt("Lütfen bir sayı giriniz.");

// for(let i=0 ; i<=sayi ;i++){

// if(sayi%i ==0 ){
//     console.log(sayi);
// }

// }

 
//let sayi = prompt("Lütfen 1 -10 arasında bir sayı tutunuz.");


var sayi,tahmin,hak=1,i=0;;
sayi=Math.round(Math.random()*10)+1;
do
{
    tahmin=parseInt(prompt("Tahmini Giriniz: "));
    if (tahmin<sayi)
    {
        console.log("Daha büyük bir sayı giriniz.<br>"); 
    }
    if (tahmin>sayi)
    {
        console.log("Daha küçük bir sayı giriniz.<br>"); 
    }
    if (tahmin==sayi)
    {
        console.log("Tebrikler bildiniz. Tuttuğum sayı: "+ sayi + "<br>");
        console.log(hak + ". hakkınızda bildiniz."); 
    }
hak++;
}
while ((tahmin!=sayi) && hak<10)
if (hak>10)
{
    console.log("Hakkınız kalmadı. Tutulan sayı : "+ sayi + "<br>");
}