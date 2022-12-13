const form = document.querySelector("form");
const searchCityInput = document.getElementById("searchCity");
const degreeCheckBox = document.getElementById("degreeCheckBox");
class Weather {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  getInfo() {
    this.xhr.open(
      "GET",
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchCityInput.value.toLowerCase()}&days=3&lang=tr`
    );
    this.xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa"
    );
    this.xhr.setRequestHeader(
      "X-RapidAPI-Host",
      "weatherapi-com.p.rapidapi.com"
    );

    this.xhr.onload = () => {
      const container = document.getElementById("container");
      container.innerHTML = "";
      if (this.xhr.status == 200) {
        const data = JSON.parse(this.xhr.responseText);
        const todayDate = data.location.localtime.slice(0, 10);
        const name = data.location.name.toUpperCase();
        const country = data.location.country;
        const todayDegree = Math.round(data.current.temp_c);
        const todayIcon = data.current.condition.icon;
        const todayInfo = data.current.condition.text;
        const todayFeels = Math.round(data.current.feelslike_c);
        const todayWind = data.current.wind_kph;
        const todayHumidity = data.current.humidity;

        const city = new City(
          todayDate,
          name,
          country,
          todayDegree,
          todayIcon,
          todayInfo,
          todayFeels,
          todayWind,
          todayHumidity
        );
        UI.getCityInfotoUI(city);
        const dataAfter = data.forecast.forecastday;
        dataAfter.map((item, index) => {
          if (index !== 0) {
            UI.getAfterTodayToUI(
              item.date,
              item.day.condition.icon,
              Math.round(item.day.maxtemp_c),
              Math.round(item.day.mintemp_c),
              item.day.condition.text
            );
          }
        });

        const dataByTime = data.forecast.forecastday[0].hour;
        dataByTime.map((item) => {
          UI.getForecastByTime(
            item.time,
            item.condition.icon,
            item.condition.text,
            Math.round(item.temp_c),
            item.wind_kph,
            item.humidity
          );
        });
      }
    };
    this.xhr.send();
  }
}
const weather = new Weather();
eventListener();
function eventListener() {
  form.addEventListener("submit", getCity);
  searchCityInput.addEventListener("keyup", setToUpperCase);
  document.addEventListener("DOMContentLoaded", backgroundImageLoad);
}

function backgroundImageLoad() {
  const body = document.querySelector("body");
  body.style.backgroundImage = "url(img/background.jpg)";
  body.style.backgroundAttachment = "fixed";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
}

function getCity(e) {
  e.preventDefault();
  weather.getInfo();
}
function setToUpperCase() {
  searchCityInput.value = searchCityInput.value.toUpperCase();
}
