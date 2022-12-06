document.getElementById("change").addEventListener("click", change);
function change() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.apilayer.com/exchangerates_data/latest?apikey=vyr0d4PsHNN852X4jUrIXA4RWSCELkLZ"
  );
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let rate = response.rates.TRY;
      let amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * rate;
    }
  };
  xhr.send();
}
