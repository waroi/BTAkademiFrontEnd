import styled from "styled-components";

const ButtonGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 966px) {
    flex-direction: column;
  }
`;

export default ButtonGroup;
