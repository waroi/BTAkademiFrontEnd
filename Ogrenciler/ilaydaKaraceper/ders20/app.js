function getData(data) {
    return new Promise ( function (resolve, reject){
        setTimeout(function (){
            if (typeof data === "string") {
                //olumlu
                resolve("datayı aldık" + data);
            }else{
                //olumsuz
                reject(new Error("Datayı alamadık, string değer gir"));
            }
        }, 3000);
    })
}

getData("5")
.then(response) ==> console.log("gelen değer: " + response)