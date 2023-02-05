import "../App.css";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoLists = () => {
  const { deleteAll } = useTodo();

  return (
    <div className="m-0 p-3 overflow">
      <h4 className="header">Bütün Görevler</h4>
      <div className="d-flex row justify-content-between pt-3">
        <select className="form-input">
          <option value="false">Bütün Görevler</option>
          <option value="true">Tamamlananlar</option>
        </select>
        <button onClick={() => deleteAll()} className="btn btn-light">
          Hepsini Temizle
        </button>
      </div>
      <TodoItem />
    </div>
  );
};

export default TodoLists;
