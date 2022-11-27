// Sinema Koleksiyon
// - 3-4 input ve bir tane buton olacak, bu inputlardan gelen değerler ile bir veri listemiz yada tablomuz olacak, örnek olarak (film adı, yönetmeni, yılı, türü, afiş resminin url'i),

// - bu bilgiler ile alt kısımda bir film koleksiyon bölümümüz olacak burada her bir film bir kart gibi düşünülebilir.

// - her bir kart içinde de film ile ilgili afiş ve diğer bilgiler olacak, aynı zamanda bu kart üzerinde 2 adet buton olacak biri silme diğeri de güncelleme işi yapacak.

// - güncelleme butonuna tıklandığında bilgiler tekrar yukarıdaki forma yaılıp orada düzenlenecek.
//<img src="..." class="rounded float-end" alt="...">

const form = document.getElementById("film-form");
const filmAdıInput = document.getElementById("filmId");
const yönetmenAdıInput = document.getElementById("yonetmenId");
const filmYılıInput = document.getElementById("yilId");
const filmTürüInput = document.getElementById("turId");
const urlInput = document.getElementById("UrlId");
const kaydetButton = document.getElementById("kaydetbtn");

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addTodo);
    // document.addEventListener("DOMContentLoaded", loadAllTodos);
}

function addTodo(e) {
    let film={
        filmName:filmAdıInput.value,
        Yönetmen:yönetmenAdıInput.value,
        Yıl:filmYılıInput.value,
        Tür:filmTürüInput.value,
        Url:urlInput.value,
    }
    console.log(film)
    e.preventDefault();
  }

//   function addTodoToUI(newTodo) {
//     const listItem = document.createElement("li");
//     const link = document.createElement("a");
//     link.href = "#";
//     link.className = "delete-item";
//     link.innerHTML = "<i class='fa fa-remove'></i>";
//     listItem.className = "list-group-item d-flex justify-content-between";
//     listItem.appendChild(document.createTextNode(newTodo));
//     listItem.appendChild(link);
//     todoList.appendChild(listItem);
//     todoInput.value = "";
//   }