// Object Literal
// const person1 = {
//   name: "Varol",
//   age: 37,
//   showInfo: function () {
//     console.log("Bilgiler gösteriliyor");
//   },
// };
// const person2 = {
//   name: "Esma",
//   age: 20,
//   showInfo: function () {
//     console.log("Bilgiler gösteriliyor");
//   },
// };
// let numbers = [1, 2, 3, 4];
// console.log(person1);
// console.log(numbers);

// Yapıcı Fonksiyon - Constructor
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  // this.showInfo = function () {
  //   console.log("Bilgiler gösteriliyor");
  // };
}
// Yapıcı Fonksiyon - Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype
Employee.prototype = Object.create(Person.prototype);

Person.prototype.showInfo = function () {
  console.log("Bilgiler gösteriliyor");
};
Employee.prototype.toString = function () {
  console.log(`
  İsim: ${this.name}
  Yaş: ${this.age}
  Maaş: ${this.salary}
  `);
};

const person1 = new Employee("Varol", 37, 5000);
const person2 = new Employee("Hakan", 20, 10000);
console.log(person1);
person1.showInfo();
person1.toString();
