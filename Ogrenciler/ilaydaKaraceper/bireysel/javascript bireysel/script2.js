//Koşullu Durumlar ( if - else )

const firstName = "Çağla";
const userName= "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";

if (userName=="caglayilmaz"){
    console.log("merhaba çağla")
}
else{
    console.log("kullanıcı bulunamadı!")
}

// if (age === 20 ) {
//     console.log("yaşınız = 20");
// }

if (isStudent){
    console.log("hangi bölümde okuyorsun?")
}
else{
    console.log("hangi mesleği yapıyorsunuz?")
}

if (age>=18){

    if(school=="university"){
        console.log("ehliyet alabilirsin")
    }
    else{
        console.log("ehliyet için eğitimin yetersiz")
    }

}else{
    console.log("yaşın ehliyet almak için yetersiz")
}

//let id = "6374235476"
if (typeof id !="undefined"){
    console.log("id: " + id);
}else {
    console.log("no id")
}