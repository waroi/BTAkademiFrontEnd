// var firstnumber= 20;
// var secondnumber=30;

// //Number-sayısal ifadeler//
// console.log(firstnumber+secondnumber);

// //Stringler-Yazılı ifadeler-Karakter  Dizileri//
// var username= "Hakan";
// console.log(username);
// console.log(typeof username);

// //Boolean-True/False//
// var a=true;
// console.log(a);
// console.log(typeof a);

// //null-boş//
// var a=null;
// console.log(a);
// console.log(typeof a);

// //Object-Nesne//
// var user={
//     name:"serhat",
//     surname:"aktaş",
//     age:25,
// };
// // console.log(user);
// console.log(user.name);

// //ARRAY- Diziler//
// var users=["serhat","aktaş","25"];
// console.log(users);
// console.log(typeof users);

// //Function-Fonksiyonlar//
// var merhaba= function(){
//     console.log("deneme");
// };
// merhaba();


// var a=10;
// var b=a;

// console.log(a,b);
// a=20;
// console.log(a,b);



// var a={
//     name="serhat",
//     surname="aktaş",
//     age="25",
// };
// var b=a;
// console.log(a,b);
// a.name="hakan";
// a.surname="abcjd";

// var a=[1,2,3];
// var b=a;
// a.push(4);
// console.log(b);




//operatörler//
// let s;
// const a=14;
// const b=4;

// s=a+b;
// s=a-b;
// s=a*b;
// s=a/b;
// s=a%b;// mod alma//
// console.log(s);

//String methodları//
// let value;
// const firstname="serhat";
// const lastname="aktaş";
// const departman="yazılım";
// const salary="10000";

// value=firstname+lastname;
// value=firstname+" "+lastname;

// value=firstname;
// value +=" "+firstname+" "+departman;
// value=firstname.length;//kaç tnae harf var onu sayar
// value=firstname.toLowerCase();
// value=firstname.toUpperCase();
// value=firstname[2];//ikinci indesteki harfi getirdi.
// value=firstname[firstname.length-1];//en son harfi getirdi.
// value=lastname.includes("e");//last name'in içinde e var mı bakar true veya false diye döner.
// value=firstname.concat(" ",lastname," ","deneme").toLowerCase();
// value="İsim:"+firstname+"\nSoyisim:"+lastname+"\ndepartman:"+departman+"\nsalary:"+salary; //alt alta yazdırma uzun yokl//
// value=`isim: ${firstname}\nSoyisim: ${lastname}\ndepartman ${departman}`;
// console.log(value);

//template//

// value=`<ul>
//     <li>${firstname}</li>   //alt alta yazdırma//
//     <li>${lastname}</li>
//     <li>${departman}</li>
//     </ul>`;

//     document.body.innerHTML=value;

//array methodları//
// let value;
// const Numbers=[45,65,54,75,99];
// const langs=["pyhton", "C++","Javascript"];

// value=Numbers.length;
// value=Numbers[3];
// value=Numbers[Numbers.length-1];
// // Numbers.push(200);
// // value=Numbers;
// // Numbers.pop();
// // Numbers.shift();
// value=Numbers.sort()//alfabatik sıralar
// value=Numbers.sort(function(x,y){
//     return x-y; //küçükten büyüğe sıralar
// });
// value=Numbers.sort(function(x,y){
// return y-x; //bütyükten küçüğe
// });
// value=Numbers.indexOf(25);
// value=Numbers.includes(7);

// let value;
// const user={
//     name: "serhat aktaş",
//     age:"25",
//     email:"aktas.serhatt@hotmail.com",
//     langs:["Türkçe","İngilizce"],
//     adres:{
//         city:"sakarya",
//         street:"hızırtepe",
//         No:"21",
//     }
// workstatus:function(){
//     console.log("çalışıyor");

// },
// };

// value=user.adres.city;
// value=user.email;
// value=user.workstatus();


// const process= "2";
// if(process === 1){
//     console.log("işlem 1");
//     }
//     else if(process===2){
//         console.log("process===2")
//     }
// else{
//     console.log("yanlış işlem seçtiniz.")
// }


//Methodlar//
// console.log(window);
// console.log(this);

// let value;
// let title;
// title=document.querySelector(h2);
// title.className 
// value=document.getElementsById(p1);
// console.log(value);
let title;

title=document.querySelector("ul");
title.addEventListener("click", sec);
function sec(e){
e.target.style.textDecoration="line-through";
}
