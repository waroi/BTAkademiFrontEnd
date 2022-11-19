let value1;
let value2;


value = document.getElementsBy("li");
console.log(value1);
value2 = document.querySelector("ul");
console.log(value2);

value2.addEventListener("click", select);

function select() {
    value2.style.strike = "4px solid red";
}


dv = document.getElementById('col-left');

dv.addEventListener('dragstart', function(e) {
    dv.style.opacity=0.6;
    e.dataTransfer.dropEffect="move";
});
