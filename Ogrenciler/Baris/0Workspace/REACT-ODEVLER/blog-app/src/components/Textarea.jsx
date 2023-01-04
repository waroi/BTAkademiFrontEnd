import styled from "styled-components";
import Color from "./Color";

const Textarea = ({ inputId, labelName, icon }) => {
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
  const Label = styled.label`
    margin: 0;
    padding: 0.5rem;
    ${Color.default}
    max-width:75px;
    border-radius: 0 8px 0 0;
  `;
  const InputGroup = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  `;
  return (
    <InputGroup>
      <Label htmlFor={inputId}>
        {icon} {labelName}
      </Label>
      <Textarea id={inputId} rows="10 " />
    </InputGroup>
  );
};

export default Textarea;
