import React from "react";

const User = (props) => {
  const setToMessage = () => {
    props.onClick(props.id);
  };
  return (
    <div
      onClick={setToMessage}
      className="hover:bg-slate-200 p-2 ease-in-out duration-300 rounded-lg cursor-pointer"
    >
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col" title={props.phone}>
        <p className="font-bold text-slate-800">{props.name}</p>
        <small className="font-light italic">
          {props.content.length >= 50
            ? props.content.slice(0, 50) + "..."
            : props.content}
        </small>
      </div>
    </div>
  );
};

export default User;
