//Object Literal
// const person1 = {
//   name: "Varol",
//   age: 37,
//   showInfo: function () {
//     console.log("Bilgiler gösteriliyor.");
//   },
// };

// const person2 = {
//   name: "Esma",
//   age: 20,
//   showInfo: function () {
//     console.log("Bilgi gösteriliyor...");
//   },
// };

//Yapıcı Fonksiyon

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.showInfo = function () {
    console.log("Bilgi gösteriliyor..");
  };
}

function Person() {
  this.name = name;
  this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
const person1 = new Employee("Varol", 37, 5000);
const person2 = new Employee("Esma", 20, 10000);

Employee.prototype.showInfo = function () {
  console.log("Bilgiler gösteriliyor");
};

Employee.prototype.toString = function () {
  console.log(`
      İsim: ${this.name}
      Yaş: ${this.age}
      Maaş: ${this.salary}
      `);
};

console.log(person1);
person1.showInfo();
