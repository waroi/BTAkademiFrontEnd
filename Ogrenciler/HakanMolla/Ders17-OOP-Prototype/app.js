// // object literal
// const person1={
//     name:"Varol",
//     age:"37",

//     showInfo:function(){
//         console.log("Bilgiler Gösteriliyor");
//     },

// };

// const person2={
//     name:"Esma",
//     age:"20",

//     showInfo:function(){
//         console.log("Bilgiler Gösteriliyor");
//     },

// };

// let numbers=[1,2,3,4]
// console.log(person1);
// console.log(numbers);

// yapıcı fonksiyonlar Constructor

function Employee(name,age,salary){

    this.name=name;
    this.age=age;
    this.salary=salary;
    this.showInfo=function(){
        console.log("Bilgiler Gösteriliyor");
}

}

const person1= new Employee("Varol",37,5000);
const prsone2=new Employee("hakan",20,1000);
console.log(person1);
person1.showInfo();