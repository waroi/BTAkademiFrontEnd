import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="todo" onClick={deleteTodo}>
      <input type="checkbox"></input>
      <label> {props.id} {props.text}</label>
    </div>
  );
};

export default TodoItem;
