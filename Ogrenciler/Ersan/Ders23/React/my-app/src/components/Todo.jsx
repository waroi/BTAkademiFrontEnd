import React from "react";
import db from "../json-server/db.json";

const Todo = ({ todoId, isDone, todoText }) => {
  fetch;
  return (
    <div>
      <h2>Todo-List:</h2>
      <p>
        {todoId}
        {isDone}
        {todoText}
      </p>
    </div>
  );
};

export default Todo;
