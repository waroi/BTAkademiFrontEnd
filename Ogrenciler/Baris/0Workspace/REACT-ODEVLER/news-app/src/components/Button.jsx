import styled from "styled-components";
import Color from "./Color";

const Button = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.5s;
  :hover {
    box-shadow: 0 0 8px 1px #ccc;
  }
  ${(props) => {
    if (props.color) {
      return Color.primary;
    } else {
      return Color.default;
    }
  }};
`;

export default Button;
