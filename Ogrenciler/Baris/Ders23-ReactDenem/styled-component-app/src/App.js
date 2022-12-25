import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import styles from "./CustomsStyle.module.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Varol", status: "success", age: 65 },
    { id: 2, name: "Ilayda", status: "error", age: 20 },
    { id: 3, name: "Esma", status: "success", age: 21 },
    { id: 4, name: "Ersan", status: "primary", age: 43 },
  ]);
  const getStatus = (item) => {
    if (item.age <= 40) {
      return "minimal";
    } else if (item.age > 40 && item.age <= 50) {
      return "medium";
    } else if (item.age > 60) {
      return "high";
    }
  };
  const StyledButton = styled.button`
    color: #5c01a1;
    background: #90e1a3;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 8px 16px;
    cursor: pointer;
  `;
  const SecondaryButton = styled(StyledButton)`
    color: #fff;
    background: #1a81a1;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  `;
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className={`riskStatus ${getStatus(item)}`}>
            <p>
              {item.name} - Risk: {getStatus(item)} - Yaş: {item.age}
            </p>
          </div>
        );
      })}
      <hr />
      <button>Deneme Button</button>
      <hr />
      <StyledButton>StyledButton</StyledButton>
      <hr />
      <SecondaryButton size="30">SecondaryButton</SecondaryButton>
      <hr />
      <div className={styles.moduleCss}>Merhaba</div>
      <button className={styles.customButton}>Selam Tıkla</button>
      <hr />
      {data.map((item) => {
        return <div className={styles[item.status]}>{item.name}</div>;
      })}
    </div>
  );
}

export default App;
