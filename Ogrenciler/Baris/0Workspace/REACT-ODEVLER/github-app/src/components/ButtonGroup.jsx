import styled from "styled-components";

const ButtonGroup = styled.div`
  margin: 10px auto;

  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ButtonGroup;
