import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import logo from "../image/logo.png";
import Color from "./Color";

const Navbar = () => {
  const navigate = useNavigate();
  const NavbarLayout = styled.nav`
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    box-shadow: 0 0 8px 1px #3c3c3c;
    ${(props) => {
      if (props.color) {
        return Color.primary;
      } else {
        return Color.default;
      }
    }};

    @media (max-width: 472px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  `;
  const NavbarBrand = styled.h1`
    margin: 0 auto;
    padding: 0.2rem;
  `;
  const NavbarList = styled.ul`
    margin: 0;
    padding: 0;
    @media (max-width: 472px) {
      margin: 0 auto;
    }
  `;
  const NavbarItem = styled.li`
    margin: 0;
    padding: 0.2rem;
    list-style: none;
    display: inline-block;
  `;
  return (
    <NavbarLayout>
      <NavbarBrand>
        <img src={logo} alt={logo} width="200" />
      </NavbarBrand>
      <NavbarList>
        <NavbarItem>
          <Button color="primary" onClick={() => navigate("/")}>
            Anasayfa
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" onClick={() => navigate("/contact")}>
            İletişim
          </Button>
        </NavbarItem>
      </NavbarList>
    </NavbarLayout>
  );
};
export default Navbar;
