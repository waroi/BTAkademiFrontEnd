// // var userName="serhat";
// // document.write(userName);

// // //note: var funtino scope u tanıyor.blog scopeu tanımıyor.
// value = document.querySelector("p");
// value = document.querySelector(".text");
// value = document.querySelector("#title");
// value = document.querySelectorAll("p");
// value = document.querySelectorAll(".text");
// value = document.querySelectorAll("#title");
// value = document.getElementById("section");

// const button = document.createElement("a");
// button.id = "clear-todos";
// button.className = "btn btn-danger ms-3";
// button.href = "https://www.google.com/";
// button.target = "_blank";
// const text = document.createTextNode("Temizle");
// button.appendChild(text);
// value.appendChild(button);

// const ekle = document.createElement("a");
// ekle.className = "btn btn-success ms-3";
// ekle.href = "https://www.udemy.com/";
// ekle.target = "_blank";
// const ekleText = document.createTextNode("Ekle");
// ekle.appendChild(ekleText);
// value.appendChild(ekle);

// value = document.getElementById("inner");
// value.innerHTML = `<a class="btn btn-primary m-3" href="https://www.hepsiburada.com/" target="_blank">Kaydet</a>`;

// console.log(value);

// const kaydetButton=document.addEventListener("click",deneme);
// function deneme(){
//     console.log(document);
// }

// const textInput=document.getElementById("text-input");
// textInput.addEventListener("keyup",konsol);
// textInput.addEventListener("focus",clearValue);

// function konsol(){
//     console.log(textInput.value);
// }
// function clearValue(){
//     textInput.value="";
// }


const textInput=document.getElementById("InputText");
const btn=document.addEventListener("click",ekle);
const liste=document.getElementById("liste");
const icerik=document.getElementById("icerik");
var myNodelist = document.getElementsByTagName("li");
var close = document.getElementsByClassName("close");
const btn2=document.addEventListener("click",temizle)

function ekle(){
    // liste.innerHTML=textInput.value;
    var li = document.createElement("li");
    var t = document.createTextNode(textInput.value);
    li.appendChild(t);
    if (textInput.value === '') {
        // alert("You must write something!");
      } else {
        document.getElementById("liste").appendChild(li);
      }
      document.getElementById("InputText").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            };
        }
    // console.log(icerik.value);
    event.preventDefault();
}

    // const btn2=document.addEventListener("click",temizle)
function temizle(){
    // this.parentNode.remove();
    // liste.innerHTML="";
    const btn2=document.getElementById("btn2");
}



























