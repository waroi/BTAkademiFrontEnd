const person = {
  name: "Varol Maksutoğlu",
  year: 1985,
  salary: 10000,
};

let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];

//for in

for (let prop in person) {
  console.log(prop, person[prop]);
}

for (let i in langs) {
  console.log(i, langs[i]);
}

//for of

// for (let value of person) {
//   // objeler için kullanamayız.
//   console.log(value);
// }

for (let value of langs) {
  console.log(value);
}
