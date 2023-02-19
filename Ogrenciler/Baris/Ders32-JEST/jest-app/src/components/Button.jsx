const Button = (props) => {
  return (
    <button
      data-testid={props.id}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
