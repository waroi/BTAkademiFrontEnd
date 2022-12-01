let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
const numbers = [1, 4, 9, 16];

// map() fonksiyonu
const map1 = numbers.map(function (e) {
  return e * 2;
});

console.log(numbers);
console.log(map1);

let users = [
  {
    name: "Varol",
    age: 35,
  },
  {
    name: "Esma",
    age: 35,
  },
];

console.log(
  users.map(function (user) {
    return user.name;
  })
);

//ForEach

langs.forEach(function (e) {
  console.log(e);
});

//filter()

const result = langs.filter(function (e) {
  if (e.length >= 4) {
    return e;
  }

  // return lang.length>=4;
});

console.log(result);
