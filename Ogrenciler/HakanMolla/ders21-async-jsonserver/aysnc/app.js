class Request {
  async  get (url){

        const res = await fetch(url);
        if(!res.ok){
            throw new Error(` Bir hata oluştur ${res.status}`);
        }
        const data = await res.json();
        return data;    
    }
}

const request = new Request();
request
.get("https://jsonplaceholder.typicode.com/albums")
.then((data)=>console.log(data))
.catch((err)=>console.log(`Hata:${err.message}`));