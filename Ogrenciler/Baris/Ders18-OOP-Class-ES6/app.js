// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
//   //   this.showInfo = () => {
//   //     console.log("Bilgiler gösteriliyor");
//   //   };
// }

// Employee.prototype.toString = function () {
//   console.log(`
//     İsim: ${this.name}
//     Yaş: ${this.age}
//     Maaş: ${this.salary}
//     `);
// };

//BASE CLASS-SUPER CLASS
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showInfo() {
//     console.log(`
//         İsim: ${this.name}
//         Yaş: ${this.age}
//         `);
//   }
// }
// //Sub Class - Child Class
// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
//   //Override
//   showInfo() {
//     console.log(`
//         İsim: ${this.name}
//         Yaş: ${this.age}
//         Maaş: ${this.salary}
//         `);
//   }
// }

// const emp = new Employee("Barış", 32, 5000);
// emp.showInfo();
// console.log(emp);

// class Mat {
//   static cube(x) {
//     console.log(x * x * x);
//   }
// }
// Mat.cube(2);
