import styled from "styled-components";
import Color from "./Color";

const CardHeader = styled.h4`
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid #cccc;
  border-radius: 8px 8px 0 0;
  ${Color.primary};
`;

export default CardHeader;
