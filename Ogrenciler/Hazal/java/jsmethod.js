//window objesi
//console.log(window);
//console.log(this);






//spread Operator
//let sayilar1 = [1,2,3,4];
//let sayilar2 = [5,6,7,8];
//let sayilar3



//for(let i = 0; i< sayilar1.length; i++){
//sayilar3.push (sayilar1[1]);



// let sayilar3 =[...sayilar1, ...sayilar2];
//console.log(sayilar3);


//functional Scope
//function Fun() {
//var value1 = 40;
//let value2 = 80;
//const value3 = 60;
//console.log("Function Scope:", value1, value2, value3)

// Tag'e göre seçim
value = document.querySelector("h2");
value = document.querySelector("title");
value = document.querySelector("#p1");
value = document.querySelectorAll("h2");
value = document.querySelectorAll("title");
value = document.querySelectorAll("#p1");

value = document.getElementById("p1");

title = document.querySelector("h2");
title.className ="btn btn-primary";


title.addEventListerner("click", denemeFonksiyon);

function denemeFonksiyon() {
    value.style.border:
}