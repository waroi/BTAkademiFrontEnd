import React from "react";
import Card from "react-bootstrap/Card";

const BEText = ({ name, caption }) => {
  return (
    <>
      <Card.ImgOverlay>
        <Card.Title className="fw-bolder">{name}</Card.Title>
        <Card.Text className="fw-lighter fst-italic">{caption}</Card.Text>
      </Card.ImgOverlay>
    </>
  );
};

export default BEText;
