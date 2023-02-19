import React from "react";
import PropType from "prop-types";
import "./Title.css";
const Title = ({ size, onClick, text, ...props }) => {
  return (
    <div {...props} onClick={onClick} className={`custom-title ${size}`}>
      {text}
    </div>
  );
};

Title.protoType = {
  size: PropType.oneOf(["small", "medium", "large"]),
  text: PropType.string.isRequired,
  onClick: PropType.func,
};
Title.defaultProps = {
  size: "medium",
  text: "Başlık 1",
  onClick: undefined,
};
export default Title;
