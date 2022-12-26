import styled from "styled-components";
import Color from "./Color";
const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px #3c3c3c;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
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
    :hover {
    opacity: 0.8;
  }
  :focus {
    opacity: 1;
  }
`;

export default Button;
