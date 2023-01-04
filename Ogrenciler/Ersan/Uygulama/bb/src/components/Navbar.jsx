import styled from "styled-components";
import NavbarBrand from "./NavbarBrand";
import logo from "../img/logo.png";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px #3c3c3c;
  `;

  return (
    <Navbar>
      <NavbarBrand>
        <img src={logo} alt={logo} width="100px" />
        Blog-App
      </NavbarBrand>
      <NavbarItem>
        <NavbarLink href="#">New Post</NavbarLink>
      </NavbarItem>
    </Navbar>
  );
};
export default Navbar;
