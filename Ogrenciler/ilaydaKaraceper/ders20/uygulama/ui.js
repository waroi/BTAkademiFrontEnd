class UI {
    static getAllData(id, title, body) {

        const container = document.querySelector(".container");
        container.innerHTML +=
            `<div class="card">
        
        <div class="card-body">
          <h5 class="card-title">${id} , ${title}</h5>
          <p class="card-text">${body}</p>
          <a href = "#" class = "btn btn-danger" id=${id}>sil</a>
        </div>
      </div>`
    }

    static deleteData(e) 
    {
        e.target

        // if (
        //     e.target.id == id

        // ){
        //    console.log(e.target.parentElement)
        // }
    } 
}