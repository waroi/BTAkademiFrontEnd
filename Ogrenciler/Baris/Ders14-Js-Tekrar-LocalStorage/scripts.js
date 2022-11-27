let value;

value = document.location;

//ID YE GÖRE
value = document.getElementById("title");
value.style.color = "red";

//class'a göre
value = document.getElementsByClassName("text");
for (let i = 0; i < value.length; i++) {
  value[i].style.color = "blue";
}

//tag'e göre
value = document.getElementsByTagName("p");

//css selector'e göre
value = document.querySelector("p");
value = document.querySelector(".text");
value = document.querySelector("#title");

value = document.querySelectorAll("p");
value = document.querySelectorAll(".text");
value = document.querySelectorAll("#title");

value = document.getElementById("section");

const button = document.createElement("a");
button.id = "clear-todos";
button.className = "btn btn-danger ms-3";
button.href = "http://www.google.com";
button.target = "_blank";
const text = document.createTextNode("Temizle");
button.appendChild(text);
value.appendChild(button);

const ekle = document.createElement("a");
ekle.id = "add-todos";
ekle.className = "btn btn-success ms-3";
ekle.href = "http://www.duckduckgo.com";
ekle.target = "_blank";
const txtEkle = document.createTextNode("Ekle");
ekle.appendChild(txtEkle);
value.appendChild(ekle);

value = document.getElementById("inner");
value.innerHTML = `
<a class="btn btn-primary m-3" id="kaydet" href="#">Kaydet</a>
`;

console.log(value);

//DOM eventleri

const kaydetBtn = document.getElementById("kaydet");
// kaydetBtn.addEventListener("click", function () {
//   console.log("çalıştı");
// });

kaydetBtn.addEventListener("click", fncKaydet); //submit,focus,keypress
function fncKaydet() {
  console.log(document);
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus", clearValue);
function konsol() {
  console.log(textInput.value);
}
function clearValue() {
  textInput.value = "";
}
