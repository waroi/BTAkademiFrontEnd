class Person{
    constructor(name,age){
    this.name=name;
    this.age=age;
}
showInfo(){
    console.log(
        `
        İsim: ${this.name}
        Yas: ${this.age}
        Maaş: ${this.salary}
        `);
}

}
// Sub Class -Child Class
class Employee extends Person {
    constructor(name ,age,salary){

        super(name,age);
        this.salary=salary;
    }
    // Override
    showInfo(){
        console.log(
            `
            İsim: ${this.name}
            Yas: ${this.age}
            Maaş: ${this.salary}
            `);
        }
}

const emp =new Employee("varol",37,5000);
emp.showInfo();
console.log,emp;