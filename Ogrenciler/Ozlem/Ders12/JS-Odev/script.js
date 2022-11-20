// Odev (String Methodlari)
// Bilgisayar aklından bir sayı tutacak kullanıcı da sürekli bu sayıyı tahmin etmeye çalışacak. 
// Bilgisayar kullanıcıyı aşağı yada yukarı diye yönlendirecek. 
// Kullanıcı sayıyı doğru tahmin ettiğinde kaç tahminde bildiyse ona göre puan verecek.


let a = Math.floor(Math.random() * 101);
// console.log(a);

let yanlis_denemeler = 0

    function ask_to_user(){
        let sayi = prompt("Bir Sayi Yazin (0-100)");
        check_number(sayi);
        
    }

    function check_number(sayi){

        if (sayi > a){
            yanlis_denemeler++
            console.log("asagi");
            ask_to_user();
        }
    
        else if (sayi < a){
            yanlis_denemeler++
            console.log("yukari");
            ask_to_user();

        }

        else if (sayi == a){
            console.log("dogru");
            let puan = 100 - (yanlis_denemeler*5)
            if (puan < 0){
                puan = 0
            }
        
            console.log(yanlis_denemeler + " kere yanlis deneme yaptiniz.");
            console.log(puan + " puan aldiniz");
        }
    
        else {
            console.log("Lutfen bir sayi giriniz");
            ask_to_user();
            
        }


    }


ask_to_user();









