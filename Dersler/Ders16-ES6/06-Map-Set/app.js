// Map == Key(Anahtar) - Value(Değer)

const key1 = "Varol";
const key2 = { a: 10, b: 20 };
const key3 = () => 5;

let denemeMap = new Map(); // Oluşturma

// Değer ekleme
denemeMap.set(key1, "ilk değer");
denemeMap.set(key2, "ikinci değer");
denemeMap.set(key3, "üçüncü değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// Değer okuma
// console.log(denemeMap.get("Varol"));
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));

// denemeMap.forEach((value, key) => console.log(key, value));

const students = new Map();
students.set("Barış", 90);
students.set("Hakan", 95);
students.set("Esma", 100);

// forEach
// students.forEach((value, key) => console.log(key, value));

// for (let [key, value] of students) {
//   console.log(key, value);
// }

// Set - Kümeler
// const mySet = new Set();
// mySet.add(50);
// mySet.add("Deneme");
// mySet.add([1, 2, 3, 4]);

// console.log(mySet);
// console.log(typeof mySet);

const arr = [1, 2, 7, 5, 4, 2, 1];

const arrSet = new Set(arr);

// console.log(arrSet);
// console.log(typeof arrSet);
// console.log(arrSet.has(8));

//for of
// for (let value of arrSet) {
//   console.log(value);
// }

// forEach
arrSet.forEach((value) => console.log(value));
