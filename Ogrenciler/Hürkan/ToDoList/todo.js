document.querySelector("#ekle").onclick = function() {
  if (document.querySelector("#list input").value.length == 0) {
    console.log("Lütfen data giriniz.");
  } else { 


  const ekle = document.createElement("li");

  ekle.className = "list-group-item bg-success d-flex justify-content-around";
  const text = document.querySelector("#list input").value;
  const ekleText = document.createTextNode(text);

 
  ekle.appendChild(ekleText);

  const todolist = document.getElementById("todolist");
  todolist.appendChild(ekle);

  const icon = document.createElement("i");
  icon.className = "delete btn btn-success bi bi-x-circle";
  ekle.appendChild(icon);


  const silme = document.querySelectorAll(".delete");
  for (let i = 0; i < silme.length; i++) {
    silme[i].onclick = function () {
      this.parentNode.remove();   // hocaya sor.
    };
  }


  const textInput = document.querySelector("#giris");
textInput.addEventListener("keyup", konsol);
textInput.addEventListener("focus", clearValue);

function konsol() {
    console.log(textInput.value);
};

function clearValue() {
   textInput.value = "";
};


const okay = document.getElementById("todolist");
okay.addEventListener("mouseover", (event) => {
 
  event.target.style.color = "orange";

  setTimeout(() => {
    event.target.style.color = "";
  }, 300);
});



  console.log(ekle);
   }
  };

  const araInput = document.querySelector("#ara");
  araInput.addEventListener("keyup", konsol);
  araInput.addEventListener("focus", clearValue);
  
  function konsol() {
      
  const search = document.querySelectorAll(".delete");
  for (let i = 0; i < search.length; i++) {
    
    litext = li.textContent;
    if (litext.toUpperCase().indexof(filter)>-1) {
       search[i].style.display = "";
  
    } else {
      search[i].style.display = "none";
    } 
  };
  };
  
  function clearValue() {
     araInput.value = "";
  };

  







  





