//Map ==Key(Anahtar)-Value(Değer) --Objectin iterable karşılığı

//key anahtar sadece sembol ve string oluyor. Map ile her şey alabiliyor.

let denemeMap = new Map();

const key1 = "Varol";
const key2 = { a: 10, b: 20 };
const key3 = () => 5;

//Değer ekleme

denemeMap.set(key1, "ilk değer");
denemeMap.set(key2, "ikinci değer");
denemeMap.set(key3, "üçüncü değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// get değer okuma
console.log(denemeMap.get("Varol"));
console.log(denemeMap.get(key2));
console.log(denemeMap.get(key3));

denemeMap.forEach((value, key) => {
  console.log(key, value);
});

const students = new Map();
students.set("Barış", 90);
students.set("Hakan", 95);
students.set("Esma", 100);

//forEach

students.forEach((value, key) => console.log(key, value));

// For of
// for (const [key, value] of students) {
//   // Destructing
//   console.log(key, value);
// }

//Set-Kümeler //Buda arrayin iterable karşılığı gibi, ama array alıyoru her şeyi.

// const mySet = new Set();
// mySet.add(50);
// mySet.add("deneme");
// mySet.add([1, 2, 3, 4]);

// console.log(mySet);
// console.log(typeof mySet);

const arr = [1, 2, 7, 4, 3, 2, 1];

const arrSet = new Set(arr);

// console.log(arrSet);
// console.log(typeof arrSet);
// console.log(arrSet.has(5));

// for of
// for (let value of arrSet) {
//   console.log(val);
// }

// for each
arrSet.forEach(function (val) {
  console.log(val);
});
