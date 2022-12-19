// function getTextFile(){
//     fetch("deneme.txt").then(response=>response.text().then(data=>console.log(data))).catch((err)=>console.log(err));
// }

// getTextFile();

// function getJsonFile(){
//     fetch("employees.json").then(response=>response.json()).then(data=>console.log(data)).catch((err)=>console.log('hata',err));
// }

// getJsonFile()

// function getapi(){
//     fetch("https://jsnplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((data)=console.log(data))
//     .catch((err)=>console.log("Hata",err));
// }


class Reguest{

    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then(response=>response.json())
            .then(data=>resolve(data))
            .catch((err)=>reject(err));
        })
    }

post(url,data){
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"contect-Type":"application/json"},
    })
    then(response=>response.json())
            .then(data=>resolve(data))
            .catch((err)=>reject(err));
       
}









}