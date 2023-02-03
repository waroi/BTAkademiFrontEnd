import React from "react";
import { Container } from "react-bootstrap";
import logo from "../image/404.png";
const PageNotFoundView = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>404 - Sayfa Bulunamadı</h2>
      <img src={logo} alt={logo} />
    </Container>
  );
};

export default PageNotFoundView;
