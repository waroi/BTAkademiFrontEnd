value = document.getElementById("section");

const ekle = document.createElement("a")
ekle.className = "btn btn-success ms-3";
ekle.href = "https://getbootstrap.com/docs/5.2/getting-started/introduction/";
ekle.target = "_blank";
const ekleText = document.createTextNode("Ekle");
ekle.appendChild(ekleText);
value.appendChild(ekle);


value = document.getElementById("inner");
value.innerHTML = `<button class = "btn btn-primary" id="kaydet" href="https://www.hepsiburada.com/" target = "_blank">Kaydet</button>`

console.log(value);


// DOM Eventleri**

const kaydetButton = document.getElementById("kaydet");

// kaydetButton.addEventListener("click", function() {
//     console.log("Çalıştı");
// });

kaydetButton.addEventListener("click", deneme);  // submit, focus, keypress

function deneme() {
    console.log("deneme çalıştı");
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus", clearValue);

function konsol() {
    console.log(textInput.value);
};

function clearValue() {
   textInput.value = "";
};




