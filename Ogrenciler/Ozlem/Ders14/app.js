let value;

value = document.location;

// ID'ye göre seçim
value = document.getElementById("title");
value.style.color = "red";

// class'a göre seçim
value = document.getElementsByClassName("text");

for (let i = 0; i < value.length; i++) {
  value[i].style.color = "blue";
}

// Tag'e göre seçim
value = document.getElementsByTagName("p");

// Css Selector'e göre seçim
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
button.href = "https://www.google.com/";
button.target = "_blank";
const text = document.createTextNode("Temizle");
button.appendChild(text);
value.appendChild(button);

const ekle = document.createElement("a");
ekle.className = "btn btn-success ms-3";
ekle.href = "https://www.udemy.com/";
ekle.target = "_blank";
const ekleText = document.createTextNode("Ekle");
ekle.appendChild(ekleText);
value.appendChild(ekle);

value = document.getElementById("inner");
value.innerHTML = `<a class="btn btn-primary m-3" href="https://www.hepsiburada.com/" target="_blank">Kaydet</a>`;

console.log(value);



const kaydetButton = document.getElementById("kaydet");

// kaydetButton.addEventListener("click", function ()
//     {
//         console.log("Calisti");
    
//     });


kaydetButton.addEventListener("click", deneme); // submit, focus, keypress 

function deneme (){
    console.log(document);
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus", clearValue);

function konsol () {
    console.log(textInput.value);
}

function clearValue () {
    textInput.value = "";
}