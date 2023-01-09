import React from "react";
import ReactDOM from "react-dom";

const PortalSample = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam ben portal örneğiyim {text}</div>,
    target
  );
};

export default PortalSample;
