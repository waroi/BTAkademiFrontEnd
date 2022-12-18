document.getElementById("btn").addEventListener("click", function () {
    
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // xhr.onreadystatechange = function (){
    //     console.log(this.readyState);
    //     if (this.status== 200 && this.readyState == 4) {
    //         console.log(this.responseText);
    //     }
    // }
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById("veri").textContent = this.responseText;
        }
    };

    xhr.open("GET", "deneme.txt");
    xhr.send();


});

document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json")
    xhr.onload = function () {
        let list = document.getElementById("employees")
        if (this.status == 200) {
            const parsedData = JSON.parse(this.responseText);
            parsedData.forEach(function (dataItem){
                list.innerHTML += `
                
                <tr>
                <td>${dataItem}</td>
                <td>${dataItem.department}</td>
                <td>${dataItem.salary}</td>
                </tr>`;

            });
        }else {
            console.log("bir hata oluştu");
        }
    };
    xhr.send();
}