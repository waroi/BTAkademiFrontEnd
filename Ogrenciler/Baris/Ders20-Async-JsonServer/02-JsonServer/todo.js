class CRUD {
  constructor() {
    this.url = "http://localhost:3000/todos";
  }
  async getTodo() {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`Hata:${response.status}`);
    }
    const todos = await response.json();
    return todos;
  }
}

const crud = new CRUD();
crud.getTodo().then((data) => console.log(data));
