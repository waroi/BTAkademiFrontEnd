// let langs=["python","c++","go","ruby","javascript"];
// const numbers=[1,4,7,9,23,44];

// console.log(numbers);


// //Map fonksiyonu
// const map1=numbers.map(function(e){
//     return e*2;
// })
// console.log(map1);

//arrow function

// const cube =function(x){
//     return x*x*x;
// }
//yada

// const cube= x => x*x*x;//bir satırda bu şekilde yazılabilir.Ama iki satı olacaksaparantez açılaacktır.


// console.log(cube(4)+1);

let number1,number2,kalanlar;
let arr=[100,200,300,400];

//destruction
[number1,number2,...kalanlar]=arr;
console.log(number1,number2,kalanlar);