import styled from "styled-components";
import Color from "./Color";

export const Card = styled.div`
  margin: 0 auto;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 0 8px 2px #cccc;
  @media (max-width: 966px) {
    width: fix-content;
  }

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
  text-align: center;
`;

export const CardBody = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 966px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const CardFooter = styled.div`
  ${Color.primary};
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: space-between;
  border-top: 1px solid #6ba7bf;
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
