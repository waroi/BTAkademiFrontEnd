import { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  function SubmitHandler(titleText, titleDetail) {
    const todoItem = {
      title: titleText,
      titleDetail: titleDetail,
      id: Date.now(),
      isDone: false,
    };
    setTodo([...todo, todoItem]);
  }
  const value = { todo, setTodo, SubmitHandler };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export const useTodo = () => useContext(TodoContext);
