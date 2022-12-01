// DÖNGÜLER 3'E AYRILIR (while, do while, for)

// while loop

// let i = 0;
// while (i<10){ //sonsuz döngü
//     console.log(i);
//     i++; // i= i + 1 veya i+=1 de aynı anlama gelir birer birer artmasını istediğimiz anlamına geliyor baby
// }

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//break ve continue

// let i = 0;
// while (i<10){
//     console.log(i);
//     if (i==6){
//         break

//     } i++;
// }


// let i = 0;
// while (i<10){ 
//     if (i==3){
//         continue;
//     }
//     console.log(i);
//     i++
// }


//------------------------------------------------------------------------------------------------------------------------------------------------------------------


// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i<10);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------


//for loop


// for (let i=0; i<10; i++){
//     console.log(i);
// }

// for (let i=0; i<10; i++){
//     if (i==3){
//         console.log("seçilen rakam:" +i);
//         continue
//     }
//     console.log(i);
// }

// let toplam=0;
// for (let i=1; i<10 ; i++){
//     toplam+=i;
// }
// console.log(toplam);

// let carpma=1;
// for (let i=1; i<10 ; i++){
//     carpma*=i;
// }
// console.log(carpma);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------


//DİZİ VE OBJELERDE DÖNGÜ KULANIMI


// let citys=["İstanbul". "Ankara", "İzmir", "Eskişehir", "Erzincan"]

// let users=[
//     {firstName:"Aslı", lastName:"xxx"}
//     {firstName:"Ahmet", lastName:"yyy"}
//     {firstName:"Vecihi", lastName:"zzz"}
// ]
// //Arrays

// for(let i= 0; i<citys.length;i++){
//     console.log(citys[i]);
// }

// //for in metodu

// for (let i in citys){
//     console.log(`index: ${i} value: ${citys[i]}`)
// }

// citys.forEach(function(item){
//     console.log(item);
// })


// for(let i=0; i<users.length; i++){
//     console.log(users[i].firstName);
// }

// for (let i in users){
//     console.log(`index: ${i} value: ${users[i].lastName}`);
// }


// map returns array


// let veri = users.map(function(item){
//     return item.firstName + " " +item.lastName;
// });
// console.log(veri);

let numbers = [1,3,5,7,9,12];

let num = numbers.map(function(n){
    return n*n;
});
console.log(num)