class Request {
    async get(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Bir hata oluştu ${res.status}`);
        }
        const data1 = await res.json();
        return data1;
    }

    async post(data){
        const response = await fetch("https://jsonplaceholder.typicode.com/albums",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })  
        
        if (!response.ok) {
            throw new Error(`Bir hata oluştu ${response.status}`);
        }
        const data1 = await response.json();
        return data1;
    }

    async put(data){
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1",
        {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })   
        
        if(!response.ok) {
            throw new Error(`Bir hata oluştu ${response.status}`);
        }
        const data1 = await response.json();
        return data1;
    }
    }


    


    const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
    .then((data) => console.log(data)) //olumlu snuc döndüğündde olacak islemler
    .catch((err) => console.log(`Hata: ${err.message}`))

//post put delete eklenecek

request
    .post({
        userId: 99999,
        title: "Deneme 1234",
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

request
    .put(1, {
        userId: 99999,
        title: "Deneme 1234",
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


//   const asyncPostCall = async () => {
//     try {
// const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//      // your expected POST request payload goes here
//              title: "My post title",
//              body: "My post content."
//             })
//          });
//          const data = await response.json();
//       // enter you logic when the fetch is successful
//          console.log(data);
//        } catch(error) {
//      // enter your logic for when there is an error (ex. error toast)

//           console.log(error)
//          }
//     }

// asyncPostCall()


// async post(data){
//     const res = await fetch ('https://jsonplaceholder.typicode.com/albums',
//         {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json" },
//       })
// }
// if(!res.ok) {
//     throw new Error(`hata oluştu ${res.status}`);
// }
// const data = await res.json();
//     return data;
// }
