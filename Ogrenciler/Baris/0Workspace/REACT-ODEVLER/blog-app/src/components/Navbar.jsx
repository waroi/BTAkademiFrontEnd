import React from "react";
import NavbarItem from "./NavbarItem";
import NavLink from "./NavLink";
import logo from "../img/logo.png";
import styled from "styled-components";
import NavbarBrand from "./NavbarBrand";
import NavbarImage from "./NavbarImage";
const Navbar = () => {
  const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarImage src={logo} alt={logo} width="200px" />
      </NavbarBrand>
      <NavbarItem>
        <NavLink>Deneme</NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink>DENEMe2</NavLink>
      </NavbarItem>
    </Navbar>
  );
};

export default Navbar;
