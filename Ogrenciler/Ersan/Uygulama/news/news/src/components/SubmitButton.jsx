import styled from "styled-components";

const SubmitButton = styled.button`
  margin: 0 auto;
  padding: 6px 12px;
  border-radius: 8px;
  transition: 0.5s;
  text-decoration: none;
  color: white;
  background-color: green;
  :hover {
    cursor: pointer;
    background-color: #cccc;
    color: black;
  }
`;

export default SubmitButton;
