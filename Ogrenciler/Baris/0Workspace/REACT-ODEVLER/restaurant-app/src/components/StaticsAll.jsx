import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const StaticsAll = () => {
  return (
    <Container className="mt-2 shadow-lg p-5 rounded">
      <h4 className="text-center ">İstatistik Sayfası</h4>
      <Row xs={1} md={3} className="mt-5">
        <Col>
          <Card className="bg-light bg-gradient">
            <Card.Body>
              <Card.Title>Bekleyenler</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-light bg-gradient">
            <Card.Body>
              <Card.Title>Tamamlananlar</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light bg-gradient">
            <Card.Body>
              <Card.Title>Toplam Gelir</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticsAll;
