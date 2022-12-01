const person = {
  name: "Varol Maksutoğlu",
  year: 1985,
  salary: 5000,
};

const langs = ["Python", "C++", "Go", "Ruby", "Javascript"];

// for in

// for (let prop in person) {
//   console.log(prop, person[prop]);
// }

// for (let i in langs) {
//   console.log(i, langs[i]);
// }

// for of
// objeler için kullanılamaz
// for (let value of person) {
//   console.log(value);
// }

for (let value of langs) {
  console.log(value);
}
