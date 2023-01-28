import styled from "styled-components";
import Color from "./Color";

const Button = styled.button`
  margin: 0;
  padding: 0.6rem 1.3rem;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.5s;
  :hover {
    box-shadow: 0 0 8px 1px #3c3c3c;
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
