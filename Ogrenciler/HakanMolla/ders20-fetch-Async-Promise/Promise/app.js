// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof data =="string"){
//                 //olumlu
//                 resolve("Datayı aldık = "+data);
//             }else{
//                 //olumsuz
//                 reject(new Error("Datayı alamadık, string değer girin"))
//             }
//         },3000)
//     })
// }

// getData(5).then((response)=>console.log("Gelen dğer :"+response)).catch((error)=>console.log(error))



function x2(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number =="number"){
                //olumlu
                resolve(number * number);

            }else{
                reject(new Error("lütfen sayı giriniz"));
            }
        },2000)
    })
}


x2(5)
.then((response)=>response*2)
.then((res2)=>(res2<100?"kaldın":"gectin"))
.then((res3)=>console.log(res3))
.catch((error)=>console.log(error));