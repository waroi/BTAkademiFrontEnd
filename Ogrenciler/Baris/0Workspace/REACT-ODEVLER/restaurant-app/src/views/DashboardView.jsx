import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
const DashboardView = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <Menu />
        </Col>
        <Col sm={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardView;
