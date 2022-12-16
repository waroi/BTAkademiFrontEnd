class App {
  constructor() {
    this.xhr = new XMLHttpRequest();
    this.apiUrl =
      "https://google-translate1.p.rapidapi.com/language/translate/v2/languages";
    this.translateUrl =
      "https://google-translate1.p.rapidapi.com/language/translate/v2";
  }
  get() {
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        const parsedData = JSON.parse(this.xhr.responseText);
        parsedData.data.languages.forEach((element) => {
          UI.loadLanguagesToUI(element.language);
        });
      }
    };
    this.xhr.open("GET", this.apiUrl);
    this.xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa"
    );
    this.xhr.setRequestHeader(
      "X-RapidAPI-Host",
      "google-translate1.p.rapidapi.com"
    );
    this.xhr.send();
  }
  post(data) {
    this.xhr.onload = () => {
      if (this.xhr.status == 200) {
        const targetInput = document.getElementById("targetInput");
        const parsedData = JSON.parse(this.xhr.responseText);
        parsedData.data.translations.forEach((element) => {
          targetInput.value = element.translatedText;
        });
      }
    };
    this.xhr.open("POST", this.translateUrl);
    this.xhr.setRequestHeader(
      "content-type",
      "application/x-www-form-urlencoded"
    );
    this.xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa"
    );
    this.xhr.setRequestHeader(
      "X-RapidAPI-Host",
      "google-translate1.p.rapidapi.com"
    );
    this.xhr.send(data);
  }
}
const app = new App();
const form = document.querySelector("form");
eventListener();
function eventListener() {
  form.addEventListener("submit", translateTo);
  document.addEventListener("DOMContentLoaded", loadPage);
}
// q=deneme&target=es&source=en

function translateTo(e) {
  e.preventDefault();
  const nativeInput = document.getElementById("nativeInput");
  const nativeSelectBox = document.getElementById("nativeLanguageSelect");
  const targetSelectBox = document.getElementById("targetLanguageSelect");
  const text = nativeInput.value;
  const native = nativeSelectBox.value;
  const target = targetSelectBox.value;
  const data = `q=${text}&target=${target}&source=${native}`;
  app.post(data);
}
function loadPage() {
  app.get();
}
