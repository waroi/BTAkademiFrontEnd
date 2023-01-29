import React from "react";
import Card from "react-bootstrap/Card";

const BEImage = ({ url }) => {
  return (
    <>
      <Card.Img variant="top" src={url} height="200px" />
    </>
  );
};

export default BEImage;
