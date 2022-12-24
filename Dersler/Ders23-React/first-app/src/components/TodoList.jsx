import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          setTodoList(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div>
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          todoId={todo.id}
          isDone={todo.isDone}
          todoName={todo.text}
        />
      ))}
    </div>
  );
};
