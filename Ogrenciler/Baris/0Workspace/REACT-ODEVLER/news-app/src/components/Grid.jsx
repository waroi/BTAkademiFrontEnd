import styled from "styled-components";

export const GridRow = styled.div`
  display: grid;
  grid-templates-row: 1fr;
  width: fit-content;
  gap: 1rem;
`;
export const GridColumn = styled.div`
  display: grid;
  align-items: center;
  gap: 1.2rem;
  ${(props) => {
    if (props.col) {
      return `grid-template-columns: repeat(${props.col}, 1fr);
  @media (max-width:1000px){
    grid-template-columns: repeat(${props.col - 1}, 1fr);
  };
  @media (max-width:768px){
    grid-template-columns: repeat(${props.col - 2}, 1fr);
  };
  @media (max-width:472px){
    grid-template-columns: repeat(${props.col - 3}, 1fr);
  }`;
    } else {
      return `grid-template-columns: 1fr;`;
    }
  }};
`;
