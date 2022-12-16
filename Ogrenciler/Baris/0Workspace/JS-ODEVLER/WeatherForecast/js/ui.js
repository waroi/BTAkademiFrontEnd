class UI {
  static getCityInfotoUI(city) {
    const container = document.querySelector(".container");
    container.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "container"
    );

    const weatherInfoCards = document.createElement("div");
    weatherInfoCards.className = "container mt-5";
    const row = document.createElement("div");
    row.className = "row";
    const col6 = document.createElement("div");
    col6.className = "col-md-6";
    const card = document.createElement("div");
    card.className = "card bg-light bg-opacity-75 shadow-lg h-100";
    const cardHeader = document.createElement("h5");
    cardHeader.className = "card-header";
    cardHeader.textContent = city.todayDate;
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = `${city.name},${city.country}`;
    const cardText = document.createElement("p");
    const cardImage = document.createElement("img");
    cardText.className = "card-text display-1 d-flex gap-4";
    cardImage.className = "img-fluid";
    cardImage.src = city.todayIcon;
    cardImage.width = "100";
    cardImage.height = "100";

    cardText.textContent = `${city.todayDegree}°C`;
    const cardInfoFWH = document.createElement("div");
    cardInfoFWH.className = "d-flex gap-2";
    const textFeels = document.createElement("p");
    const textWind = document.createElement("p");
    const textHumidity = document.createElement("p");
    textFeels.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Hissedilen: ${city.todayFeels}°C`;
    textWind.innerHTML = `<i class="fa-solid fa-wind"></i> Rüzgar: ${city.todayWind} kph`;
    textHumidity.innerHTML = `<i class="fa-solid fa-water"></i> Nem: ${city.todayHumidity} %`;

    container.appendChild(weatherInfoCards);
    weatherInfoCards.appendChild(row);
    row.appendChild(col6);
    col6.appendChild(card);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardText.appendChild(cardImage);
    cardBody.appendChild(cardInfoFWH);
    cardInfoFWH.appendChild(textFeels);
    cardInfoFWH.appendChild(textWind);
    cardInfoFWH.appendChild(textHumidity);
    this.createTableForByTimeTable();
  }
  static getAfterTodayToUI(date, image, maxDegree, minDegree, info) {
    const row = document.querySelector(".row");
    row.innerHTML += `
    <div class="col-md-3">
      <div class="card bg-light bg-opacity-75 shadow-lg h-100">
        <h5 class="card-header">${date.slice(0, 10)}</h5>
        <div class="card-body">
          <img src="${image}"/>
          <p class="card-text fs-4">Maks. ${maxDegree}°C</p>
          <p>Min. ${minDegree}°C</p>
          <p>${info}</p>
        </div>
      </div>
    </div>`;
  }
  static createTableForByTimeTable() {
    const container = document.getElementById("container");
    const table = document.createElement("table");
    table.className =
      "table table-light table-bordered table-striped shadow-lg table-hover mt-5 text-center align-middle";
    const thead = document.createElement("thead");
    thead.className = "sticky-top fs-4";
    const tbody = document.createElement("tbody");
    const thHeader = document.createElement("tr");
    const thTime = document.createElement("th");
    thTime.textContent = "Saat";
    const thInfo = document.createElement("th");
    thInfo.textContent = "Açıklama";
    const thDegree = document.createElement("th");
    thDegree.textContent = "Derece";
    const thWind = document.createElement("th");
    thWind.textContent = "Rüzgar";
    const thHumidity = document.createElement("th");
    thHumidity.textContent = "Nem";
    container.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(thHeader);
    thHeader.appendChild(thTime);
    thHeader.appendChild(thInfo);
    thHeader.appendChild(thDegree);
    thHeader.appendChild(thWind);
    thHeader.appendChild(thHumidity);
    table.appendChild(tbody);
  }
  static getForecastByTime(time, image, info, degree, wind, humidity) {
    const tbody = document.querySelector("tbody");
    const trBody = document.createElement("tr");
    const tdTime = document.createElement("td");
    tdTime.textContent = time.slice(10);
    const icon = document.createElement("img");
    icon.className = "img-fluid";
    icon.src = image;
    icon.width = "50";
    icon.height = "50";
    const tdInfo = document.createElement("td");
    tdInfo.textContent = info;
    const tdDegree = document.createElement("td");
    tdDegree.innerHTML = `${degree}°C`;
    const tdWind = document.createElement("td");
    tdWind.innerHTML = `<i class="fa-solid fa-wind"></i> ${wind}`;
    const tdHumidity = document.createElement("td");
    tdHumidity.innerHTML = `<i class="fa-solid fa-water"></i> ${humidity}`;

    tbody.appendChild(trBody);
    trBody.appendChild(tdTime);
    tdInfo.appendChild(icon);
    trBody.appendChild(tdInfo);
    trBody.appendChild(tdDegree);
    trBody.appendChild(tdWind);
    trBody.appendChild(tdHumidity);
  }
}
