let buttonclassadd = document.getElementById("todobutton");
buttonclassadd.className = "btn btn-danger ms-3";
let todoInputElement = document.getElementById("todoInput");
let girdi = buttonclassadd.addEventListener("click", addText);
let value;

function addText() {
  value = todoInputElement.value;
  console.log(value);
  let listSection = document.createElement("li");
  let cross = document.createElement("button");
  cross.className = "btn-close";
  listSection.innerText = value;
  listSection.appendChild(cross);
  console.log("innertext" + listSection.innerText);
  let listUlElement = document.getElementById("listUl");
  listUlElement.appendChild(listSection);
}

let listListen = document.getElementById("listUl");
listListen.addEventListener("click", lineText);

function lineText(event) {
  var x = event.target;
  x.style.textDecoration = "line-through";
}
