class UI {
  static loadLanguagesToUI(iso) {
    const nativeSelectBox = document.getElementById("nativeLanguageSelect");
    const targetSelectBox = document.getElementById("targetLanguageSelect");
    const nativeOption = document.createElement("option");
    const targetOption = document.createElement("option");

    nativeOption.textContent = iso;
    targetOption.textContent = iso;

    nativeSelectBox.appendChild(nativeOption);
    targetSelectBox.appendChild(targetOption);
  }
}
