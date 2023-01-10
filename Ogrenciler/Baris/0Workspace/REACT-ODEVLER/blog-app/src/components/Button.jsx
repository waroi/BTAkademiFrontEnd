import styled from "styled-components";
import Color from "./Color";

export const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
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
  }}
`;

export const Dropdown = styled.div`
  position: relative;
  display: block;
`;

export const DropdownMenu = styled.div`
  min-width: 200px;
  position: absolute;
  display: none;
  z-index: 1;
  :hover {
    display: block;
  }
`;
