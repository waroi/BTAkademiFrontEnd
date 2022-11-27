let langs = ["Phyton", "C++", "Go", "Ruby", "Javascipt"];
const numbers = [1, 4, 7, 23, 44];

// console.log(numbers);

//Map() Methodu

const map1 = numbers.map(function (e) {
  return e * 2;
});

//arrow function ile alternatif
const map2 = numbers.map((e) => e * 2);

//dizinin içindeki tüm elemanlar 2 ile çarpılarak dışarı çıkar.

//----------

console.log(map1);
console.log(map2);

let users = [
  {
    name: "Hürkan",
    age: 30,
  },
  {
    name: "Serkan",
    age: 35,
  },
];

let userNames = users.map(function (user) {
  return user.name;
});

userNames.map(function (name) {
  console.log(name);
});

//forEach() Methodu

langs.forEach(function (e) {
  console.log(e);
});

//filter() Methodu

const result = langs.filter(function (Lang) {
  return langs.length >= 4;
});

console.log(result);
