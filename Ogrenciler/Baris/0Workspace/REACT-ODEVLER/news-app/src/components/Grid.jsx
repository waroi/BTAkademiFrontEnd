import styled from "styled-components";

export const GridRow = styled.div`
  display: grid;
  grid-templates-row: 1fr;
  width: fit-content;
`;
export const GridColumn = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;

  ${(props) => {
    if (props.col) {
      return `grid-template-columns: repeat(${props.col}, 1fr);`;
    } else {
      return `grid-template-columns: 1fr;`;
    }
  }}
`;
