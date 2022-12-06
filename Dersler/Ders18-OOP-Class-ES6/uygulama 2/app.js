// https://api.apilayer.com/exchangerates_data/latest?apikey=L536SR8ICuNlPFA5P5oR013O4qeGgvVl
// // "apikey", "L536SR8ICuNlPFA5P5oR013O4qeGgvVl"

document.getElementById("cevir").addEventListener("click", cevirmeIslemi);
function cevirmeIslemi() {
    const xhr = new XMLHttpRequest();
    //console.log("buradasın");
    xhr.open("GET", "https://api.apilayer.com/exchangerates_data/latest?apikey=L536SR8ICuNlPFA5P5oR013O4qeGgvVl");
    xhr.onload = function(){ //readystate 4 olduğu zaman onload (veri hazır durumda)
        if(this.status == 200){
            const parsedData = JSON.parse(this.responseText);
            const a = parsedData.rates.TRY;
            const b = document.getElementById("giris");
            const sonuc = (a*b.value);
            const cikisSonuc = document.getElementById("cikis");
            cikisSonuc.value=sonuc
            console.log(sonuc);
            console.log(parsedData.rates.TRY)
            console.log(parsedData);
            
        }
    }
    xhr.send();
}
