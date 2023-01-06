import styled from "styled-components";

const Input = styled.input`
  margin: 0;
  padding: 0.5rem;
  border-radius: 0 8px 8px 8px;
  border: 1px solid #ccc;
  :focus {
    outline: none;
    box-shadow: 0 0 3px 1px #227884;
  }
`;

export default Input;
