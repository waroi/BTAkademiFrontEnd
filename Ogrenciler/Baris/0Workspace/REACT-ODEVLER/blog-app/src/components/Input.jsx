import styled from "styled-components";

const Input = styled.input`
  width: fix-content;
  outline: none;
  border: 2px solid #ccc;
  padding: 0.5rem;
  transition: 0.5s all ease-in-out;
  :focus {
    border: 2px solid #6ba7bf;
  }
`;

export default Input;
