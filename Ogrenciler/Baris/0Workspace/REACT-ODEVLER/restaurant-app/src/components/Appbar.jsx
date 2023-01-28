import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";
function Appbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
      className="shadow"
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="text-warning text-decoration-none">
              Cudi Restaurant
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              className="text-warning text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
