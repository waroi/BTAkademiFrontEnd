import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Appbar = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand href="#" onClick={() => navigate("/")}>
            IMdb Görseller
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Navbar.Text>
                Signed in as: <a href="#login">Barış BENLİ, Ersan KOCABIYIK</a>
              </Navbar.Text>
              <Button
                variant={theme === "light" ? "dark" : "light"}
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              >
                Tema Değiştir
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
