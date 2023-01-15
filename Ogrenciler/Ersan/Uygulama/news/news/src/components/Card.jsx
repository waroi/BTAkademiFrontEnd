import styled from "styled-components";

export const Card = styled.div`
  margin: 20px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 8px 1px #ccc;
`;

export const CardTitle = styled.h2`
  margin: 0 auto;
  padding: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  small {
    color: grey;
    font-style: italic;
  }
`;
