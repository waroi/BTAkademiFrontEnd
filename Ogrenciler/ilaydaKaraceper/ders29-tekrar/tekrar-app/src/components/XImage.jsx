import React from "react";
import Card from "react-bootstrap/Card";

const XImage = ({ url }) => {
  return (
    <>
      <Card.Img variant="top" src={url} height="300px"/>
    </>
  );
};

export default XImage;
