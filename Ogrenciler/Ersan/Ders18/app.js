class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(
      ` 
                İsim: ${this.name}
                Yaş: ${this.age}
                Maaş: ${this.salary}`
    );
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    this.salary = salary;
  }
}
