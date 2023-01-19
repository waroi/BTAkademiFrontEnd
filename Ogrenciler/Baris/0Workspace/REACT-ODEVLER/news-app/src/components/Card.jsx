import styled from "styled-components";
import Color from "./Color";

export const Card = styled.div`
  margin: 0 auto;
  box-shadow: inset 0 0 24px 1px #a6948d;
  border-radius: 6px;
  ${(props) => {
    if (props.color) {
      return Color.primary;
    } else {
      return Color.default;
    }
  }}
`;
export const CardHeader = styled.div`
  margin: 0;
`;
export const CardBody = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const CardFooter = styled.div`
  margin: 1rem auto;
`;

export const CardTitle = styled.h2`
  margin: 1rem auto;
  padding-left: 1rem;
`;
export const CardText = styled.p`
  margin: 1rem auto;
  padding-left: 1rem;
`;
export const CardImage = styled.img`
  margin: 0;
  padding: 0;
  width: fit-content;
  border-radius: 6px;
`;
export const CardSmallText = styled.small`
  padding-left: 1rem;
  color: #909090;
  font-style: italic;
`;
export const CardBadge = styled.span`
  padding: 0.1rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  ${(props) => {
    if (props.color) {
      return Color.primary;
    }
  }};
`;

export const CardLink = styled.a`
  text-decoration: none;
  font-style: italic;
  color: #909090;
`;
