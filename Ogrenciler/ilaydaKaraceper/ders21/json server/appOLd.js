class Request {
    async get (url){
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Bir hata oluştu ${res.status}`);
        }
        const data1 = await res.json();
        return data1;
    }
    async post(data){
        const response = await fetch("http://localhost:3000/todos",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })  
        
        if (!response.ok) {
            throw new Error(`Bir hata oluştu ${response.status}`);
        }
        const data1 = await response.json();
        return data1;
    }
    async put(data){
        const response = await fetch("http://localhost:3000/todos/1",
        {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })   
        
        if(!response.ok) {
            throw new Error(`Bir hata oluştu ${response.status}`);
        }
        const data1 = await response.json();
        return data1;
    }
    async delete(url, id, isDone, text){
        const res = await fetch (`${url}/${id}/${isDone}/${text} `, { 
            method: "DELETE",

        });
        if(!response.ok) {
            throw new Error(`Bir hata oluştu ${response.status}`);
    }
    return await res.json();
}}


const request = new Request();

request
.get("http://localhost:3000/todos")
.then((data) => console.log(data))
.catch((err) => console.log(`Hata: ${err.message}`));

request
    .post({
        
        isDone: true,
        text: "typicode"
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

request
    .put({
        
        isDone: true,
        text: "typicode"
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

console.log(Date.now());








const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

todoButton.addEventListener("click", addTodo);


function addTodo(e){
    e.preventDefault();
    console.log(e);

    const isEmpty = str => !str.trim().length;

    if(isEmpty(todoInput.value)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 1500);

        todoInput.value = "";

    } else{
        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
        }, 1500);

         const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // inputun icine yazilanlari todo liste aktardik
    todoList.appendChild(todoDiv);

    todoInput.value = "";



    console.log(todoDiv);

    }


   
}