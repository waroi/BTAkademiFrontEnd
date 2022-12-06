// const person1 = {
//   name: "Barış",
//   age: 32,
//   showInfo: () => {
//     console.log("Bilgiler gösteriliyor");
//   },
// };
// const person2 = {
//   name: "Varol",
//   age: 37,
//   showInfo: () => {
//     console.log("Bilgiler gösteriliyor");
//   },
// };
// let numbers = [1, 2, 3, 4];
// console.log(person1);
// console.log(numbers);

//YAPICI FONKSİYON - Constructor

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  //   this.showInfo = () => {
  //     console.log("Bilgiler gösteriliyor");
  //   };
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

Person.prototype.showInfo = function () {
  console.log("Bilgiler gösteriliyor.");
};
Employee.prototype.toString = function () {
  console.log(`
  İsim: ${this.name}
  Yaş: ${this.age}
  Maaş: ${this.salary}
  `);
};

const person1 = new Employee("Barış", 32, 5000);
const person2 = new Employee("Varol", 37, 5000);

console.log(person1);
console.log(person2);
person1.toString();
