/*var firstNumber = 20
var secondnumber = 30
console.log(firstNumber + secondnumber);

var username = "hakan";
console.log(username);
console.log(typeof username);

console.log("Deneme 2");
var a = true;
console.log(a);
console.log(typeof a);


var a = "saricizmeli";
console.log(a);
var a = false;
// console.log(typeof a);


/*console.log('param1, param2, 3')

console.log(3 % 2);


console.log(typeof 'PROTURK');
console.log(typeof 5);
console.log(typeof undefined);*/

/*var merhaba = function () {
  console.log("Deneme Mesajı");
};
//merhaba();
merhaba();
merhaba();
console.log(merhaba);
console.log(typeof merhaba);*/



/*let nums = [1, 'emre', 3];
console.log(nums);
nums[1] = 2;
console.log(nums);*/

/*const PI = Math.PI;
console.log(PI);*/



/*console.log(Math.round(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));*/

/*console.log(Math.min(5, 3, 2, 32));
console.log(Math.max(5, 3, 2, 32));

const num = (Math.floor(Math.random() * 11));

console.log(num);
console.log(Math.abs(-10));*/

/*let paragraph = 'hello\temre\nkilic\t1989\\ gebze\'nin mahalle'
console.log(paragraph);*/


// // Referans değer
//var a = {
//name: "Varol",
//surname: "Maksutoğlu",
//age: 36,
//email: "varolmaksutoglu@yandex.com",
//};
//var b = a;
//console.log(a, b);
//a.name = "Hakan";
//a.surname = "Mollaahmetoğlu";
//console.log(a, b);

//var a = [1, 2, 3];
//var b = a;
//a.push(4);
//console.log(b);

//function deneme() {
//var a = 10; // Functional Scope
//deneme();
//console.log(a);
//}

/*
function myFunction() {
  var carName = "Volvo";   // Function Scope
  console.log(carName);
}

myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  carName = "Volvo";
}*///




/*{
  let a = 10;
  const b = 20;
  a = 30;
  console.log(a);
  console.log(b);
}*/

/*let value; let a = 123;
a = 1.14;
a = function () {
  console.log("Deneme");
};
a = [1, 2, 3];
value = String(a);

value = a + " bir sayıdır";
console.log(a);*/


//value = 34 + +"6"; // 346
//value = 34 + Number("6"); // 28

//console.log(value);
//console.log(typeof value);

var sinifList = {
  name: "Emre",
  lastname: "kilic",
  age: 32,
  tarih: 1989,


}
//console.log(sinifList.age);

//var yas = [5, "emre", "kilic", 12, 22]
//console.log(yas[3]);


//var daireAlani = function (r) {
//return Math.PI * Math.pow(r, 2)
//};

//console.log(daireAlani(5));

//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]//
//let value;
//const numbers = [45, 78, 34, 79, 23, 5];
//const langs = ["Python", "C++", "Javascript"];
//value = numbers.length;
//value = numbers[numbers.length - 5];

//value = numbers.shift();
// console.log(value,);
// value = numbers.sort();
// value = numbers.sort(function (x, y) {
//   return x - y;                     //Küçükten Büyüğe Sıralama
// });

// console.log(numbers.indexOf(78));
// console.log(numbers.includes(100));

// console.log(value);

/*var car = {
  color: 'red',
  brand: 'volvo',
  power: '1.6 hp',

  run: function () {
    console.log('araba calisti');
  },
  testEt: function () {
    //sfsdfsds
    //sdsfsfsd
    //sdfsdfsd
    return true;
    // console.log('test edildi');
  }
}
var emre = car.testEt();
if (emre) {
  car.run();
}*/
/*const a = 20;
const b = "20";

if (a == b) {
  console.log("Değerler eşit");

}*/


/*function user(name = "Bilgi Yok", age = "Bilgi Yok") {
  console.log(`isim: ${name} \nYaş: ${age}`);
}
user("Varol", 36);
user();*/

// let Sayi;
// let Puan = 100;
// const Goal = (Math.round(Math.random() * 100));
// console.log(Goal);

// do {
//   Sayi = Number(prompt("0 dan 100 e kadar sayi giriniz."));
//   if (Sayi == Goal) {
//     if (Puan == 100) {
//       alert(` tebrikler cok sanslisin ilk seferde bildin 100 tam puan`)
//     }
//     else {
//       alert(` tebrikler bildiniz  Puaniniz : ${Puan}`)
//     }
//   }

//   else if (Sayi < Goal) {
//     alert("daha yuksek  sayi giriniz")
//     Puan = Puan - 5;
//   }

//   else {
//     alert("daha dusuk sayi giriniz")
//     Puan = Puan - 5;

//   }


// }
// while (Sayi != Goal)



// const Islem = prompt("ilgili islemi seciniz, secenekler: +, -' *, /");
// const FirstNumber = Number(prompt("0 dan 10 e kadar sayi giriniz."));
// const SecondNumber = Number(prompt("0 dan 10 e kadar sayi giriniz."));

// switch (Islem) {
//   case "+":
//     console.log(FirstNumber + SecondNumber);

//     break;
//   case "-":
//     console.log(FirstNumber + SecondNumber);

//     break;
//   case "*":
//     console.log(FirstNumber + SecondNumber);

//     break;
//   case "/":
//     console.log(FirstNumber + SecondNumber);

//     break;


//   default:
//     break;
// }





// console.log(window);
// console.log(this);

// DERS14  TEKRAR  DERS14  TEKRAR DERS14  TEKRAR

// function deneme() {
//   console.log("deneme");

// }

// deneme();


// console.log(a);

// var a;
// a = 5;

// function kare(a) {

//   return a * a

// }

// let sonuc = kare(2) + 4;
// console.log(sonuc);

//global scope

// var a = 10;
// let b = 20;
// const c = 30;
// // functional scope

// function deneme() {
//   var a = 15;
//   let b = 25;
//   const c = 35;
//   console.log("function scope: ", a, b, c); // 15 , 25 ,35


// }
// // blog scope
// if (true) {
//   var a = 20; // function scope
//   let b = 30; // blog scope
//   const c = 40; // blog scope
//   console.log("function scope: ", a, b, c); // 20.30.40

// }

// console.log("gloabal scope:", a, b, c); //20 20 30


// let a = 20;
// a = { 2, 3, 4, 5};
// a = true;
// let b = String(a);

// console.log(b);
// console.log(typeof b);

// console.log(5 + "4"); //54
// console.log(5 - "4"); //1

//operatorler

// const firstName = "Varol";
// const lastName = "Maksutoglu";
// const department = "bilisim";
// const salary = "3750";

// let = value = firstName + "" + lastName + "" + department + "" + salary;
// //or
// value = `isim ${firstName}, soyisim ${lastName}`;

// console.log(value);
// const numbers = [45, 78, 34, 79, 23, 5];
// let value;
// // numbers.push(7);
// // numbers.pop();
// // numbers.shift();
// //

// value = numbers.sort(function (a, b) {
//   return b - a;

// });
// value = numbers;
// //value = newNumbers;

// console.log(value);


// last ders tekrar //

// let value;
// value = document.body;



// //id ye gore

// value = document.getElementById("title");
// value.style.color = "red";

// value = document.getElementsByClassName("text")

// for (let i = 0; i < value.length; i++) {
//   value[i].style.color = "blue";
// }
// console.log(value);





// const button = document.createElement("a");
// button.id = "clear-todos";
// button.className = "btn btn-danger ms-3";
// button.href = "https://www.google.com/";
// button.target = "_blank";
// const text = document.createTextNode("Temizle");
// button.appendChild(text);
// document.body.appendChild(button);


// value = document.getElementById("inner");
// value.innerHTML = `<a class="btn btn-primary m-3" href="https://www.hepsiburada.com/" target="_blank">Kaydet</a>`;

// console.log(value);

// const textinput = document.getElementById("text-input");
// textinput.addEventListener("keyup", konsol);
// textinput.addEventListener("focus", clearvalue);
// function konsol() {

//   console.log(textinput.value);
// }

// function clearvalue() {

//   textinput.value = "";
// }

const todoInput = document.getElementById("myInput");
const addButton = document.getElementById('addButton');

addButton.addEventListener("click", function () {
  document.getElementById('myUL').innerHTML = `
    ${document.getElementById('myUL').innerHTML}
    <li>${todoInput.value}</li>
  `;
});






const ekle = document.createElement("li");
const text = document.createTextNode("Temizle");
ekle.appendChild(text);
document.body.appendChild(ekle);





























































