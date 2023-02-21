import React from "react";
import PropTypes from "prop-types";
import "./title.css";

const Title = ({ size, onClick, text, ...props }) => {
  return (
    <div {...props} onClick={onClick} className={`custom-title ${size}`}>
      {text}
    </div>
  );
};

Title.protoTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Title.defaultProps = {
  size: "medium",
  text: "Başlık 1",
  onClick: undefined,
};

export default Title;
