import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Navbar = styled.div`
    width: fix-content;
    padding: 8px;
    margin-bottom: 10px;
    box-shadow: 0 0 8px 1px #ccc;
  `;
  const NavItem = styled(NavLink)`
    text-decoration: none;
    padding: 8px;
    margin: 8px;
    color: black;
    transition: 0.5s;
    :hover {
      color: grey;
    }
  `;
  return (
    <Navbar>
      <NavItem to="/">Anasayfa</NavItem>
      <NavItem to="/contact">İletişim</NavItem>
    </Navbar>
  );
};

export default Navbar;
