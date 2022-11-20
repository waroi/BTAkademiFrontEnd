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

dv.addEventListener('dragstart', function(e.) {
    dv.style.opacity=0.6;
    e.dataTransfer.dropEffect="move";
});

// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);
