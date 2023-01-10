import styled from "styled-components";

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  outline: none;
  border: 2px solid #ccc;
  padding: 0.5rem;
  transition: 0.5s all ease-in-out;
  :focus {
    border: 2px solid #6ba7bf;
  }
  font-family: Arial;
  resize: none;
`;

export default TextArea;
