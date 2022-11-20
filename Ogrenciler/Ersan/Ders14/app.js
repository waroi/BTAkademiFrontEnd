let value;
value = document.getElementById("section");

const buton = document.createElement("a");
buton.id = "clear-todos";
buton.className = "btn btn-danger ms-3";
buton.href = "https://www.google.com/";
buton.target = "_blank";
const text = document.createTextNode("Temizle");
buton.appendChild(text);
value.appendChild(buton);
