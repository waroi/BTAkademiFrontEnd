//Koşullu Durumlar (if-else)
const firstName = "çağla";
const userName = "caglayilmaz";
const age = 17;
const isStudent = true;
const school = "university";
if (userName == "caglayilmaz"){
    console.log("merhaba çağla");
}else{
    console.log("kullanıcı bulunamadı")
}

// if(age === 20){
//     console.log("yaşınız 20")
// }

if(isStudent == true){
console.log("hangi bölümde okuyorsun?")
}else{
    console.log("hangi mesleği yapıyorsun?")
}

if (age >=18){
    if (school == "university"){
        console.log("ehliyet alabilirsin")
    }else{
        console.log("ehliyet almak için eğitiminiz yetersiz")
    }
}else{
    console.log("yaşın yetersiz, ehliyet alamazsın")
}

let id = "3234"
if (typeof id != "undefined"){
    console.log("id: " + id);
}else {
    console.log("no id")
}