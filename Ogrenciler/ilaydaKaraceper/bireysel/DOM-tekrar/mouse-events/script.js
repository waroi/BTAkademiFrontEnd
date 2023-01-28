const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#list-group");


//click event

btn.addEventListener("click", run);

function run(event){
    console.log(`event type: ${event.type}`);
    ul.addEventListener("click", run);
}

