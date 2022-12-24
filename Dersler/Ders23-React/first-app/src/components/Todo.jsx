import React from "react";

export const Todo = ({ todoId, todoName, isDone }) => {
  return (
    <div>
      <h2>
        <span>{todoId} </span>
        <span>{todoName} </span>
        <span>{isDone ? "(Tamamlandı)" : "(Tamamlanmadı)"}</span>
      </h2>
    </div>
  );
};
