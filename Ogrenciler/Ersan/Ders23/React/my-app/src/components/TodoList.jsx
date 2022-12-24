import React from "react";

const TodoList = ({ id, text }) => {
  function get(url) {
    const res = fetch(url);
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    const data = res.json();
    console.log(data);
    return data;
  }
  get("http://localhost:3000/todos");
  return (
    <div>
      <Todo todoId={id} todoName={text} isDone={true}></Todo>
    </div>
  );
};

export default TodoList;
