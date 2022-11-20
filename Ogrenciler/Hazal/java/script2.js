const ekle = document.createElement ("a");
ekle.className = "btn btn-section";
ekle.href = "www.google.com";
ekle.target="_blank";
const ekleText = document.createTextNode("Ekle");
ekle.appendChild(ekleText);
value.appendChild(ekle);
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