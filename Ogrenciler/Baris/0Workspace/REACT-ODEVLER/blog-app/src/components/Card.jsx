import styled from "styled-components";

export const Card = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  gap: 1rem;
`;

export const CardFooter = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: space-between;
  border-top: 1px solid #ccc;
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
  height: 200px;
`;
