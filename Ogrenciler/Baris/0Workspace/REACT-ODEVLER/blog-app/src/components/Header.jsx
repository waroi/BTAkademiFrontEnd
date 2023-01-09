import styled from "styled-components";
import background from "../images/background.jpg";
import logo from "../images/logo.png";
import Container from "./Container";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavList from "./NavList";
const Header = () => {
  const HeaderContent = styled.header`
    background: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: end;
  `;
  return (
    <>
      <Container color="dark">
        <NavList>
          <NavItem>
            <NavLink href="#" color="link">
              <i className="fa-brands fa-facebook-f"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" color="link">
              <i className="fa-brands fa-twitter"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" color="link">
              <i className="fa-brands fa-github"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" color="link">
              <i className="fa-brands fa-linkedin"></i>
            </NavLink>
          </NavItem>
        </NavList>
      </Container>
      <HeaderContent>
        <img src={logo} alt={logo} />
      </HeaderContent>
    </>
  );
};

export default Header;
