import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.Fragment>
);
