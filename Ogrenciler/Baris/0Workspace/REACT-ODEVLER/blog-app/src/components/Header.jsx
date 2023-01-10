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
            <NavLink href="mailto:bb.sosyal@pm.me" color="link">
              <i className="fa-solid fa-envelope"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/bbssyl"
              target="_blank"
              color="link"
            >
              <i className="fa-brands fa-github"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="linkedin.com/in/barış-benli-80230a259"
              target="_blank"
              color="link"
            >
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
