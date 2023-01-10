import styled from "styled-components";
import NavLink from "./NavLink";

const NewPostButton = styled(NavLink)`
  position: fixed;
  padding: 1rem;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  :hover {
    box-shadow: 0 0 12px 2px #3c3c3c;
    opacity: 1;
  }
`;

export default NewPostButton;
