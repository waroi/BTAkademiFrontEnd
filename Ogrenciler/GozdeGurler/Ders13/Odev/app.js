const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
    
  })
})

 console.log(triggerTabList)

// let value;

// value = document.querySelector("#myTab")

// value.addEventListener("click", myFunc);

// function myFunc(e) {
//     event.preventDefault();
//     e.target.show()
// }

