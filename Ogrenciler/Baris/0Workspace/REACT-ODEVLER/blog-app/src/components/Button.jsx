import styled from "styled-components";
import Color from "./Color";

export const Button = styled.button`
  margin: 0 auto;
  padding: 1rem;
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
  :hover {
    opacity: 0.8;
  }
`;
