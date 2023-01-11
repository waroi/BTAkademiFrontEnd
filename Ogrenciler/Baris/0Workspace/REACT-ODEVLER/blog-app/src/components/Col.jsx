import styled from "styled-components";

const Col = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 966px) {
    align-items: center;
    padding: 0;
  }
`;
export default Col;
