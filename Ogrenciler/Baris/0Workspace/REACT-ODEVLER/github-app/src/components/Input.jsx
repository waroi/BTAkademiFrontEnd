import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  padding: 8px 10px;
  border: none;
  box-shadow: 0 0 8px 1px #6c757d;
  outline: 2px solid #6c757d;
  border-radius: 4px;
  font-size: 18px;
  ${(props) => {
    if (props) {
      return `
      outline: 2px solid #227884;
      background: #F8F9FA;
      color: #227884;
      `;
    }
  }}
  ${(props) => {
    if (props.primary) {
      return `
      outline: 2px solid #007bff;
      background: #282c34;
      color: #fff;
      `;
    }
  }}
    ${(props) => {
    if (props.success) {
      return `
      outline: 2px solid #28a745;
      background: #282c34;
      color: #fff;
      `;
    }
  }}
    ${(props) => {
    if (props.danger) {
      return `
      outline: 2px solid #dc3545;
      background: #282c34;
      color: #fff;
        `;
    }
  }}
    ${(props) => {
    if (props.warning) {
      return `
      outline: 2px solid #ffc107;
      background: #282c34;
      color: #000;
        `;
    }
  }}
    ${(props) => {
    if (props.secondary) {
      return `
      outline: 2px solid #6c757d;
      background: #282c34;
      color: #fff;
        `;
    }
  }}
    ${(props) => {
    if (props.dark) {
      return `
      outline: 2px solid #282c34;
      background: #282c34;
      color: #fff;
      `;
    }
  }};
`;

export default Input;
