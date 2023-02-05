import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const Homeview = () => {
  const { todo, setTodo, SubmitHandler } = useTodo();
  const [titleText, setTitleText] = useState("");
  const handleTitle = (e) => {
    setTitleText(e.target.value);
  };
  const [titleDetail, setTitleDetail] = useState("");
  const handleDetail = (e) => {
    setTitleDetail(e.target.value);
  };

  return (
    <div>
      <p>Make New Task</p>
      <div>
        <input
          className="in1"
          id="inp1"
          onChange={handleTitle}
          value={titleText}
        ></input>
      </div>
      <br />
      <input id="inp2" onChange={handleDetail} value={titleDetail}></input>
      <br />
      <button id="bt1" onClick={SubmitHandler(titleText, titleDetail)}>
        Create New Task
      </button>
    </div>
  );
};

export default Homeview;
