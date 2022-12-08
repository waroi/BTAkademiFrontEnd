class UI {
  static showToPhotoUI(id, title, url) {
    const divPhotos = document.getElementById("divPhotos");
    const link = document.createElement("a");
    const col = document.createElement("div");
    const card = document.createElement("div");
    const cardHeader = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardText = document.createElement("p");
    const imgUrl = document.createElement("input");
    const btnRemove = document.createElement("button");
    const divUrl = document.createElement("div");

    link.href = "#";
    link.className = "nav-link";

    col.className = "col";

    card.className = "card h-100 border-0";
    card.style.animation = "fadeInDown";
    card.style.animationDuration = "2s";
    img.className = "card-img";
    img.id = id;
    img.src = url;
    img.alt = title;

    cardHeader.className = "card-header";
    cardHeader.innerHTML = `<strong>Title:</strong> ${title}`;

    cardBody.className = "card-body";

    cardText.className = "card-text";

    divUrl.className = "input-group mb-3";
    imgUrl.value = url;
    imgUrl.type = "text";
    imgUrl.className = "form-control imgUrl";

    btnRemove.className = "btn btn-danger";
    btnRemove.id = "btnSil";
    btnRemove.innerHTML = `<i class="fa-solid fa-trash-can">`;

    divPhotos.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardHeader);
    link.appendChild(img);
    card.appendChild(link);
    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
    cardText.appendChild(divUrl);
    divUrl.appendChild(imgUrl);
    divUrl.appendChild(btnRemove);
  }
  static createModalUI(id, title, url) {
    let modalWrap = null;

    if (modalWrap !== null) {
      modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">${title}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body"><img id="${id}" src="${url}" class="img-fluid"</div>
        </div>
      </div>
    </div>`;

    document.body.append(modalWrap);

    let modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
  }

  static addPhotoToUI(newPhoto) {
    this.showToPhotoUI(newPhoto.id, newPhoto.title, newPhoto.url);
  }
  static showMessage(status, statusContent) {
    const canvasBody = document.querySelector(".offcanvas-body");
    const alert = document.createElement("div");
    alert.className = `alert alert-${status}`;
    alert.textContent = statusContent;
    canvasBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 2000);
  }
}
