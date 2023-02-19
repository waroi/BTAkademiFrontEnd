import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>merhaba ben portal.Hedefim:{text}</div>,
    target
  );
};

export default Portal;
