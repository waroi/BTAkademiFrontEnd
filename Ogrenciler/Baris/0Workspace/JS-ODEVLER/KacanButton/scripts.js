let button = document.getElementById("btnGonder");
let parola = document.getElementById("password");

button.addEventListener("mouseover", kacir);
button.style.transition = "all .3s ease-in-out";

function kacir() {
  let pos = Math.round(Math.random() * 500);

  if (parola.value.length < 8) {
    button.style.left = `${pos}px`;
    button.style.position = "relative";
    button.className = "btn btn-secondary";
  } else {
    button.className = "btn btn-success";
    button.style.position = "block";
  }
}
