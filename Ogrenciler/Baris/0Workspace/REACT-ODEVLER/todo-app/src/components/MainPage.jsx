import "../App.css";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";

const Main = () => {
  return (
    <div className="g-col-2 h-100">
      <TodoForm />
      <TodoLists />
    </div>
  );
};

export default Main;
