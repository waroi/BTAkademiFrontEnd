import styled from "styled-components";
import Color from "./Color";

export const Card = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export const CardHeader = styled.div`
  margin: 0;
  padding: 1rem;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
`;

export const CardBody = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardFooter = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: space-between;
  border-top: 1px solid #ccc;
  gap: 1rem;
  small {
    font-style: italic;
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-style: bold;
`;

export const CardText = styled.p`
  margin: 0;
  overflow: hidden;
  overflow-wrap: break-word;
`;
export const CardImage = styled.img`
  boxshadow: "0 0 12px 1px #cccc";
  margin: "0 auto";
  width: 200px;
  height: 200px;
`;
