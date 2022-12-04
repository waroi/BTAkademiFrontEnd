// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
//   // this.showInfo = function () {
//   //   console.log("Bilgiler gösteriliyor");
//   // };
// }
// Employee.prototype.showInfo = function () {
//   console.log(`
//   İsim: ${this.name}
//   Yaş: ${this.age}
//   Maaş: ${this.salary}
//   `);
// };

// Base class - Super class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showInfo() {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     `);
//   }
// }
// // Sub class - Child Class
// class Employee extends Person {
//   constructor(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     super(name, age);
//     this.salary = salary;
//   }
//   // Override
//   showInfo() {
//     console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
//   }
// }

// const emp = new Employee("Varol", 37, 5000);
// emp.showInfo();
// console.log(emp);

class Mat {
  static cube(x) {
    console.log(x * x * x);
  }
}
Mat.cube(2);
