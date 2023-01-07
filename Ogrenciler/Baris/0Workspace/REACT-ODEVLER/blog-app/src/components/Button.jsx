import styled from "styled-components";
import Color from "./Color";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  ${(props) => {
    if (props.color === "primary") {
      return Color.primary;
    } else if (props.color === "secondary") {
      return Color.secondary;
    } else if (props.color === "success") {
      return Color.success;
    } else if (props.color === "danger") {
      return Color.danger;
    } else if (props.color === "warning") {
      return Color.warning;
    } else if (props.color === "dark") {
      return Color.dark;
    } else {
      return Color.default;
    }
  }}
  :hover {
    box-shadow: 0 0 8px 1px #3c3c3c;
    opacity: 0.8;
  }
`;

export default Button;
