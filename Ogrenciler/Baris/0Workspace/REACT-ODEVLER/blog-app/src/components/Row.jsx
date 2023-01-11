import styled from "styled-components";

const Row = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: fix-content;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  @media (max-width: 966px) {
    flex-direction: column;
  }
`;
export default Row;
