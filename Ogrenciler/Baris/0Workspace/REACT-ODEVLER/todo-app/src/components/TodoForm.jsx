import { useRef } from "react";
import "../App.css";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const titleRef = useRef();
  const contentRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(titleRef.current.value, contentRef.current.value);
  };

  return (
    <div className="bg-primary">
      <form onSubmit={handleSubmit}>
        <h4 className="header">Yeni Görev Oluştur</h4>

        <div className="mb-3 form-group">
          <small className="text-end">0/50</small>
          <input
            type="text"
            placeholder="Görev başlığı"
            className="form-input"
            ref={titleRef}
          />
        </div>
        <div className="mb-3 form-group">
          <small className="text-end">0/50</small>
          <textarea
            type="text"
            placeholder="Görev hakkında daha fazla bilgi"
            className="form-input"
            rows={10}
            cols={75}
            ref={contentRef}
          ></textarea>
        </div>
        <div className="form-group">
          <div className="mx-auto mt-3">
            <button type="submit" className="btn btn-primary">
              Yeni Görevi Oluştur
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
