//Event Listener ve Event Objesi

////1.Yöntem:
// const btn = document.querySelector("#clear-todos");
// btn.addEventListener("click", function(){
//     console.log("butona tıklandı");
// });


////2.Yöntem:
const btn = document.querySelector("#clear-todos");

btn.addEventListener("click", btnClick);
function btnClick() {
    console.log("butona tıklandı");
}

const btn2 = document.querySelector("#btnAddNewTask");
btn2.addEventListener("click", btnClick);

////Normalde delete all butonuna bastığımızda sayfa yenileniyodu href # verdiğimiz için. bunun önüne geçmek için şöyle yapıyoruz;

btn.addEventListener("click", function(e){

    let value;

    value = e;
    
    value = e.target;
    value = e.target.id;
    value = e.target.classList;
    value = e.type;


    
    e.preventDefault();
    console.log(value);

})