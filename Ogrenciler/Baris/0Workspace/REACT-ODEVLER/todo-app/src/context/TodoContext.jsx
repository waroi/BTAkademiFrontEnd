import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const parsedData = async () => {
    await fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((result) => setTodos(result));
  };
  useEffect(() => {
    parsedData();
  }, []);
  const addTodo = async (title, content) => {
    const response = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid4(),
        title: title,
        content: content,
        isDone: false,
      }),
    });
    const data = await response.json();
    setTodos([...todos, data]);
  };
  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    const data = todos.filter((todo) => todo.id !== id);
    setTodos(data);
    console.log(todos);
  };
  const deleteAll = () => {
    todos.map((todo) => deleteTodo(todo.id));
  };

  const updateIsDoneTodo = async (id, situation) => {
    console.log("Gelen:", situation);
    if (!situation) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    const updateTodo = todos.filter((todo) => todo.id !== id);

    console.log("Update:", updateTodo);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    };
    // await fetch("http://localhost:3000/todos/" + id, options);
    // const response = todos.filter((todo) => todo.id !== id);
    // const responseDone = todos.filter((todo) => todo.id === id);
    // responseDone[0].isDone = isDone;
    // setTodos([...response, responseDone]);
  };

  const value = {
    todos,
    setTodos,
    isDone,
    setIsDone,
    addTodo,
    deleteTodo,
    deleteAll,
    updateIsDoneTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
