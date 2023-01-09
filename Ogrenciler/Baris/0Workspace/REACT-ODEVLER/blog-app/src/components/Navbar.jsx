import styled from "styled-components";
import NavList from "./NavList";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import Color from "./Color";
const Navbar = () => {
  const Navbar = styled.nav`
    width: fix-content;
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    box-shadow: 0 0 8px 1px #3c3c3c;
    ${(props) => {
      if (props.color === "primary") {
        return Color.primary;
      } else if (props.color === "danger") {
        return Color.danger;
      } else if (props.color === "secondary") {
        return Color.secondary;
      } else if (props.color === "dark") {
        return Color.dark;
      } else if (props.color === "link") {
        return Color.link;
      } else {
        return Color.default;
      }
    }};
  `;

  return (
    <Navbar color="primary">
      <NavList>
        <NavItem>
          <NavLink to="/" color="link">
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" color="link">
            Hakkında
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" color="link">
            İletişim
          </NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Navbar;
