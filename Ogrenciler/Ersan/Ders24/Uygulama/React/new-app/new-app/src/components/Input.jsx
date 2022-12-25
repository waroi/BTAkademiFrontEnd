import React, { useState, useEffect } from "react";

const Input = () => {
  const [text, setText] = useState("");

  function changeText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      Input
      <input type="text" onKeyUp={changeText} />
      <p>{text}</p>
    </div>
  );
};

export default Input;
