class Request {
  async get(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    return data;
  }
  async put(url, id, data) {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    return data;
  }
  async delete(url, id) {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(`Hata: ${err.message}`));

request
  .post("https://jsonplaceholder.typicode.com/posts", {
    userId: "1",
    title: "denemeTitle",
    body: "denemebody",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(`Hata: ${err.message}`));
request
  .put("https://jsonplaceholder.typicode.com/posts", 1, {
    userId: "1",
    title: "denemeTitle2",
    body: "denemebody2",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(`Hata: ${err.message}`));
request
  .delete("https://jsonplaceholder.typicode.com/posts", 1)
  .catch((err) => console.log(`Hata: ${err.message}`));
