const person = {
  name: "Barış BENLİ",
  year: 1991,
  salary: 5000,
};
const langs = ["Python", "C++", "Go", "Ruby", "Javascript"];

// for in

// for (let prop in person) {
//   console.log(prop, person[prop]);
// }

// for (let index in langs) {
//   console.log(index, langs[index]);
// }

//for of
// objeler için kullanılamaz!!!!

// for (let value of person) {
//   console.log(value);
// }

for (let value of langs) {
  console.log(value);
}
