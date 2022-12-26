import styled from "styled-components";
import Color from "./Color";
const Badge = styled.span`
  margin: 1px;
  padding: 2px 4px;
  border-radius: 4px;
  text-align: start;
  font-size: 14px;
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

export default Badge;
