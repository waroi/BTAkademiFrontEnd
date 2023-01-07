import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 0 8px 8px 8px;
  border: 1px solid #ccc;
  resize: none;
  :focus {
    outline: none;
    box-shadow: 0 0 3px 1px #227884;
  }
`;

export default Textarea;
