import React from "react";
import ReactDOM from "react-dom";

function PortalSample({ target, text }) {
  return ReactDOM.createPortal(
    <div>Selam Ben Portal Örneğim {text}</div>,
    target
  );
}

export default PortalSample;
