import Card from "react-bootstrap/Card";
import styled from "styled-components";


const XCard = styled(Card)`
  transition: 0.5s;
  :hover {
    transform: scale(1.0);
  }
  justify-content: flex-start;
  width: 500px;
  height: 500px;
  margin: 20px;
  padding: 10px;
  float: left;

  
`;


const XImage = styled(Image)`

`;

export default XCard;
