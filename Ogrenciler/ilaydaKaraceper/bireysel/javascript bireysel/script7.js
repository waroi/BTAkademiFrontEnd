//Scope Kavramı, 3'e Ayrılır

//GLOBAL SCOPE

var veri1 = 5;
let veri2 = 10;
const veri3 = 15;

function fonksiyon(){
    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;
    console.log(veri1, veri2, veri3);
}

fonksiyon();

console.log(veri1, veri2, veri3);
//FUNCTION SCOPE



//BLOCK SCOPE

if(true){
    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;
}
console.log(veri1, veri2, veri3);

let admin_password = "1111";

if(true){
    let admin_password = "2222"
}
console.log(admin_password);
// console.log(a);
// console.log(b);
// console.log(c);