import styled from "styled-components";
import Color from "./Color";

const Card = styled.div`
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0 0 10px 4px #5c5c5c;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props) => {
    if (props) {
      return Color.default;
    }
  }}
  ${(props) => {
    if (props.primary) {
      return Color.primary;
    }
  }}
  ${(props) => {
    if (props.success) {
      return Color.success;
    }
  }}
    ${(props) => {
    if (props.danger) {
      return Color.danger;
    }
  }}
    ${(props) => {
    if (props.warning) {
      return Color.warning;
    }
  }}
    ${(props) => {
    if (props.secondary) {
      return Color.secondary;
    }
  }}
  ${(props) => {
    if (props.dark) {
      return Color.dark;
    }
  }}
`;

export default Card;
