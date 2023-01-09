import styled from "styled-components";
import Color from "./Color";
const Container = styled.div`
  width: fix-content;
  margin: 0;
  padding: 0;
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

export default Container;
