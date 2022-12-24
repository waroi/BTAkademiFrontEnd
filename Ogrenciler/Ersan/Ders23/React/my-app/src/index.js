import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Todo />
    <TodoList />
  </React.StrictMode>
);
