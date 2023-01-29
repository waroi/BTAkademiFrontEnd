import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const LoadingView = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status"></Spinner>
      <span className="visually-hidden">Yükleniyor...</span>
    </Container>
  );
};

export default LoadingView;
