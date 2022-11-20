const button = document.createElement ("a");
button.className = "btn btn-section";
button.href = "www.google.com";
button.target="_blank";
const buttonText = document.createTextNode("Ekle");
button.appendChild(buttonText);
value.appendChild(button);
console.log(value);


const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus",clearvalue);

function konsol() {
    console.log(textInput.value);
}
function clearValue() {
    textInput.value ="";
}