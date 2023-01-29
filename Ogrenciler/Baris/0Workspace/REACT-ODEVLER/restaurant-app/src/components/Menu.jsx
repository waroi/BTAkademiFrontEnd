import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Menu = () => {
  return (
    <Card className="shadow-lg">
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <NavLink
              to="/dashboard/orderlist"
              className="text-decoration-none text-secondary"
            >
              Sipariş
            </NavLink>
            <Badge bg="primary" pill>
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink
              to="/dashboard/menu"
              className="text-decoration-none text-secondary"
            >
              Menü İşlemleri
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink
              to="/dashboard/settings"
              className="text-decoration-none text-secondary"
            >
              Ayarlar
            </NavLink>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Menu;
