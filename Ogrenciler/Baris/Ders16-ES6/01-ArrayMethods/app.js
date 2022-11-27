let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
const numbers = [1, 2, 3, 4, 5];

//map() fonksiyonu
// const map1 = numbers.map(function (e) {
//   return e * 2;
// });

const map1 = numbers.map((e) => e * 2);
console.log(map1);

// console.log(map1);

// let users = [
//   {
//     name: "Barış",
//     age: 32,
//   },
//   {
//     name: "Varol",
//     age: 35,
//   },
// ];

// let userNames = users.map(function (user) {
//   return user.name;
// });

// userNames.map(function (e) {
//   console.log(e);
// });

//foreach fonksiyonu
// langs.forEach(function (lang) {
//   console.log(lang);
// });

//filter fonksiyonu
// const result = langs.filter(function (lang) {
//   return lang.length > 4;
// });

// console.log(map1);
