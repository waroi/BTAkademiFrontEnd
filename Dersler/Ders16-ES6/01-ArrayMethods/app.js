let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
const numbers = [1, 4, 7, 23, 44];

// console.log(numbers);

// map() fonksiyonu
// const map1 = numbers.map(function (e) {
//   return e * 2;
// });

// const map1 = numbers.map((e) => e * 2);

// console.log(map1);

// let users = [
//   {
//     name: "Varol",
//     age: 35,
//   },
//   {
//     name: "Esma",
//     age: 18,
//   },
// ];

// let userNames = users.map(function (user) {
//   return "İsmi: " + user.name;
// });

// userNames.map(function (name) {
//   console.log(name);
// });

// forEach() Metodu
// langs.forEach(function (lang) {
//   console.log(lang); // <li key={lang.id} >{lang.text}</li>
// });

// filter() Metodu
// const result = langs.filter(function (lang) {
//   return lang.length >= 4;
// });

// console.log(result);


// Reduce() Metodu
// const totalCount = numbers.reduce((total, number) => total+=number, 0);

// const langsCount = langs.reduce((total, lang) => {
//   lang.length >= 4 ? total++: total
//   return total;
// } , 0);

// console.log(langsCount);