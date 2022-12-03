let addToDoButton = document.getElementById('addToDo'); //neden document kullanıyoruz?
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener("click", function(){
    //let paragraph = document.createElement('p');//let paragraph ı yukarıya da ekleyebilir miyiz?
    //paragraph.classList.add('paragraph-styling');
    //toDoContainer.appendChild(paragraph);
    //paragraph.innerHTML = inputText.value;
    const list = document.createElement("li");
    toDoContainer.appendChild(list);
    list.innerHTML = inputText.value;
    inputText.value = "";
/*
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });
*/
    

 


})

clearToDo.addEventListener('click', function(){

    //toDoContainer
    
    toDoContainer.firstElementChild.remove()
    //paragraph.remove(paragraph);
})