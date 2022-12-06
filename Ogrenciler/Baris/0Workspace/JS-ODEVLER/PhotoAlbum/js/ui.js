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

    cardHeader.className = "card-header d-flex justify-content-end";
    cardHeader.innerHTML = `<button class="btn btn-light" id="btnSil">
    <i class="fa-solid fa-trash-can"></i></button>`;

    cardBody.className = "card-body";

    cardText.className = "card-text";
    cardText.textContent = title;

    divPhotos.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardHeader);
    link.appendChild(img);
    card.appendChild(link);
    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
  }
  static createModalUI(title, url) {
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
          <div class="modal-body"><img src="${url}" class="img-fluid"
          <form>
            <div class="form-floating m-3">
              <input type="text" class="form-control" id="modalImgUrl" placeholder="" value="${url}">
              <label for="modalImgUrl">URL</label>
            </div>
          </form>
          </div>
          <div class="modal-footer">
            <button id="btnGuncelle" type="button" class="btn btn-primary">
              Güncelle
            </button>
          </div>
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
