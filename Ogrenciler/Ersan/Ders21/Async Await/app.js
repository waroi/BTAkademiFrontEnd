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
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    const data2 = await res.json();
    return data2;
  }

  async put(url, id, data) {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    const data2 = await res.json();
    return data2;
  }

  async delete(url, id) {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    // const data = await res.json();
    // return data;
    return await res.json();
  }
}

const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((data) => console.log(data))
  .catch((err) => console.log(` Hata: ${err.message}`));

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 99999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .put("https://jsonplaceholder.typicode.com/albums", 3, {
    userId: 99999,
    title: "Deneme 1234",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .delete("https://jsonplaceholder.typicode.com/albums", 2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
