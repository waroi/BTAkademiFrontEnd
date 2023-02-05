import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./slices/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: Date.now(),
      title: input,
      completed: false,
    }));
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleSubmit}>
        <input type="text" onInput={(e)=> setInput(e.target.value)}/>
        <button type="submit">+</button>
      </form>
      <div className="Todos"> 
        {todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.title} id={todo.id} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default App;
