//Tekrar


console.log(5 +"4") // +'nın birleştirme özellği var, 5'i stringe dönüştürüyor. Sonuc :54

console.log(5 - "4") // çıkarma işlemi var deyip stringi numaraya çeviriyor. Sonuc 1

let value;

value = document.body;
//
value = document.getElementById("title");

value.style.color = "red";

value = document.getElementsByClassName("text");  // html collection gelir, çünkü birden fazla class aynı yere tanımlanmış olabilir

for (let i = 0; i < value.length; i++) {
    value[i].style.color = "blue";
    if (i % 2 == 0) {
        value[i].style.color ="red";   
    }
}


value = document.getElementsByTagName("h2");

//Css Selector

value =document.querySelector("p")
value =document.querySelector(".text")
value =document.querySelector("#title")
value = document.querySelectorAll("p") // hepsini getiriyor. 

value=document.getElementById("section");
const button = document.createElement("a");

button.id="clear-todos";
button.className="btn btn-danger ms-2";
button.href="#";
button.target="_blank";
const text =document.createTextNode("Temizle");
button.appendChild(text);
value.appendChild(button);


value =document.getElementById("inner");
value.innerHTML= `<a class="btn btn-primary m-2" id="kaydet" href="#" target="_blank" > Kaydet</a>` 


const ekle =document.createElement("a");


console.log(value)

//DOM Eventleri

const kaydetButton= document.getElementById("kaydet");

// kaydetButton.addEventListener("click", function () {
//     console.log("Çalıştı");
// })

// kaydetButton.addEventListener("click",deneme); //submit,focus,keypress

// function deneme() {
//     console.log("Deneme Çalıştı");
// }

kaydetButton.addEventListener("mouseover",deneme); //submit,focus,keypress

function deneme() {
    console.log("Deneme Çalıştı");
}

const textInput= document.getElementById("text-input");
textInput.addEventListener("keyup", konsol)
textInput.addEventListener("focus", clearValue)


function konsol() {
    console.log(textInput.value)
}

function clearValue() {
    textInput.value = "";
}