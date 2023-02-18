import "./App.css";
import { useRef, useState } from "react";
import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./slices/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const isDoneRef = useRef();

  const [isDoneTodos, setIsDoneTodos] = useState([]);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: input,
        completed: false,
      })
    );
    setInput("");
  };

  const handleUpdate = (id) => {
    todos.map((todo) => {
      return todo.id === id
        ? dispatch(
            updateTodo({
              id: todo.id,
              completed: !todo.completed,
            })
          )
        : null;
    });
  };

  const handleIsDone = () => {
    const ref = isDoneRef.current.value;
    const trueData = todos.filter((todo) => todo.completed);
    const falseData = todos.filter((todo) => !todo.completed);
    if (ref === "true") {
      setIsDoneTodos(trueData);
    } else {
      setIsDoneTodos(falseData);
    }

    // todos.filter((todo) =>
    //   !todo.completed ? setIsDoneTodos([...todos, todo]) : null
    // );
    console.log(isDoneTodos);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleSubmit}>
        <input type="text" onInput={(e) => setInput(e.target.value)} />
        <button type="submit">+</button>
      </form>
      
        <input value="true">Tamamlananlar/>
        <input value="false">Bekleyenler/>
      
      <div className="Todos">
        <ul>
          {isDoneTodos?.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
      <div className="Todos">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.title}
            id={todo.id}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
