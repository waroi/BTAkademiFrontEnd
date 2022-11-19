let value;

// value = document.getElementsByClassName("urun");
// console.log(value);

// value.addEventListener("click", alindi);

function alindi(e) {
  e.target.style.backgroundColor = "grey";

  e.target.style.border = "5px solid green";
  e.target.style.textDecoration = "line-through";
}

// const value = document.querySelectorAll(".urun");

// value.forEach((urun) => {
//   urun.addEventListener("click", function handleClick(event) {
//     console.log("box clicked", event);

//     urun.setAttribute("style", "background-color: yellow;");
//   });
// });

value = document.getElementsByClassName("urun");
for (var i = 0; i < value.length; i++) {
  value[i].addEventListener("click", alindi);
}
