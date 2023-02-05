import { useEffect } from "react";
import "../App.css";
import { useTodo } from "../context/TodoContext";

const TodoItem = () => {
  const { isDone, todos, deleteTodo, updateIsDoneTodo } = useTodo();
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div className="card" key={todo.id}>
              <div className="card-header text-end">
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="rounded-circle btn btn-danger"
                ></button>
                <button className="rounded-circle btn btn-warning"></button>
                <button
                  onClick={() => updateIsDoneTodo(todo.id, isDone)}
                  className="rounded-circle btn btn-success"
                ></button>
              </div>
              <div className="card-body border-danger">
                <div className="card-title">{todo.title}</div>
                <div className="card-text">{todo.content}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TodoItem;
