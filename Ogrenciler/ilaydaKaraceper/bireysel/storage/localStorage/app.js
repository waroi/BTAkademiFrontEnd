//LOCAL STORAGE 

//SetItem

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar", 50);

//Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage

// localStorage.clear();

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("sport") === null){
//     console.log("sorguladığınız veri bulunmuyor")
// }else {
//     console.log("sorguladığınız veri bulunuyor");
// }

//Local Storage Array Yazma
// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// const value = JSON.parse(localStorage.getItem("todos"));

// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e){
    const value = todoInput.value;

    let 
}