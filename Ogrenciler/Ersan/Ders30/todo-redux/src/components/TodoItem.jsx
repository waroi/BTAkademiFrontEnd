import "./TodoItem.css";

const TodoItem = (props) => {
  const updateTodo = () => {
    props.onUpdate(props.id);
  };
  const deleteTodo = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="todo">
      <input type="checkbox" onChange={updateTodo}></input>
      <label onClick={deleteTodo}>
        {" "}
        {props.id} {props.text}
      </label>
    </div>
  );
};

export default TodoItem;
