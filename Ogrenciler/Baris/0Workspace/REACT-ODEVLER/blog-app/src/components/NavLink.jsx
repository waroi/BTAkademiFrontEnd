import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "./Color";

const NavLink = styled(Link)`
  padding: 0.5rem;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.5s;
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
  :hover {
    opacity: 0.8;
  }
`;

export default NavLink;
