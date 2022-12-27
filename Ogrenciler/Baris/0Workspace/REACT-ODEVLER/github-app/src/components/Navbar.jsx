import styled from "styled-components";
import color from "./Color";

const Navbar = styled.nav`
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 4px #5c5c5c;
  width: 90%;
  border-radius: 4px;
  ${(props) => {
    if (props) {
      return color.default;
    }
  }}
  ${(props) => {
    if (props.primary) {
      return color.primary;
    }
  }}
    ${(props) => {
    if (props.danger) {
      return color.danger;
    }
  }}
    ${(props) => {
    if (props.success) {
      return color.success;
    }
  }}
    ${(props) => {
    if (props.warning) {
      return color.warning;
    }
  }}
    ${(props) => {
    if (props.dark) {
      return color.dark;
    }
  }};
`;

export default Navbar;
