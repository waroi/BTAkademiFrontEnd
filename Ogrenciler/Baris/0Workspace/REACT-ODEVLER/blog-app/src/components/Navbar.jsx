import styled from "styled-components";
import NavbarBrand from "./NavbarBrand";
import logo from "../img/logo.png";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";
import Color from "./Color";
const Navbar = ({ showForm }) => {
  const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 1px #3c3c3c;
    position: sticky;
    ${Color.primary}
  `;

  return (
    <Navbar>
      <NavbarBrand>
        <img src={logo} alt={logo} width="100px" />
      </NavbarBrand>
      <NavbarItem>
        <NavbarLink href="#" onClick={showForm}>
          <i className="fa-solid fa-circle-plus"></i>
          Yeni Gönderi
        </NavbarLink>
      </NavbarItem>
    </Navbar>
  );
};

export default Navbar;
