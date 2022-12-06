// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// 505: "Internal Server Error"

document.getElementById("btn").addEventListener("click", function () {
  //XmlHTTPRequest

  const xhr = new XMLHttpRequest();
  //   console.log(xhr);
  //   xhr.onreadystatechange = function () {
  //     console.log(this.readyState);
  //     if (this.status == 200 && this.readyState == 4) {
  //       console.log(this.responseText);
  //     }
  //   };
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
  xhr.open("GET", "employees.json");
  xhr.onload = function () {
    const list = document.getElementById("tblEmployees");
    list.innerHTML = "";
    if (this.status == 200) {
      const parsedData = JSON.parse(this.responseText);
      parsedData.forEach(function (item) {
        list.innerHTML += `
        <tr>
        <td>${item.name}</td>
        <td>${item.department}</td>
        <td>${item.salary}</td>
        </tr>
        `;
      });
    } else {
      console.log("Bir hata oluştu");
    }
  };
  xhr.send();
}
