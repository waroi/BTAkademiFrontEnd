import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
const Navbar = () => {
  const navigate = useNavigate();
  const NavbarLayout = styled.nav`
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    gap: 1rem;
  `;
  const NavbarBrand = styled.h1`
    margin: 0 auto;
    padding: 0.2rem;
  `;
  const NavbarList = styled.ul`
    margin: 0;
    padding: 0;
  `;
  const NavbarItem = styled.li`
    margin: 0;
    padding: 0.2rem;
    list-style: none;
    display: inline-block;
  `;
  return (
    <NavbarLayout>
      <NavbarBrand>BB News</NavbarBrand>
      <NavbarList>
        <NavbarItem>
          <Button onClick={() => navigate("/")}>Anasayfa</Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={() => navigate("/contact")}>İletişim</Button>
        </NavbarItem>
      </NavbarList>
    </NavbarLayout>
  );
};
export default Navbar;
