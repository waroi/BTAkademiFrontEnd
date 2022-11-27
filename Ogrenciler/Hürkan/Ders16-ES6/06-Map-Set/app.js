// Map ==  Key(Anahtar)  -  Value(Değer)    şeklinde oluşur.
//istediğimiz veri tipinde oluşturabiliriz.(özellikle key'lerde.)
//objeler iterable değildir.(içinde dönemeyiz.)
//Ama map'ler iterable'dır.

const key1 = "Hürkan"; //string
const key2 = { a: 10, b: 20 }; //obje
const key3 = () => 5; //function

let denemeMap = new Map(); // Oluşturma

// Değer ekleme - set
denemeMap.set(key1, "birinci değer");
denemeMap.set(key2, "ikinci değer");
denemeMap.set(key3, "üçüncü değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// Değer okuma - get
// console.log(denemeMap.get("Hürkan")); //Birinci değer şeklinde getirecek.
// console.log(denemeMap.get(key2)); //İkinci değer şeklinde getirecek.
// console.log(denemeMap.get(key3)); //Üçüncü değer şeklinde getirecek.

// denemeMap.forEach((value, key) => console.log(key, value));

//------

const students = new Map();
students.set("Hürkan", 90);
students.set("Barış", 80);
students.set("Esma", 100);

//forEach ile dönebiliriz.

// students.forEach((value, key) => console.log(key, value));

// for (let [key, value] of students) {
//   console.log(key, value);
// }

//-------------

// Set - Kümeler

// const mySet = new Set(); //oluşturma
// mySet.add(50); //ekleme
// mySet.add("Deneme");
// mySet.add([1, 2, 3, 4]);

// console.log(mySet);
// console.log(typeof mySet);

const arr = [1, 2, 7, 5, 4, 2, 1];

const arrSet = new Set(arr);

// console.log(arrSet);
// console.log(typeof arrSet);
// console.log(arrSet.has(5)); //5 varsa true, yoksa false döner, HAS kontrol eder.

//for off

// for (let value of arrSet) {
//   console.log(value);
// }

//forEach
// arrSet.forEach((value) => console.log(value));
