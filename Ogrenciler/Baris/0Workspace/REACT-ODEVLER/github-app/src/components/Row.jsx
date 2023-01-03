import styled from "styled-components";

const Row = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 90%;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export default Row;
