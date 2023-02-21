import "./App.css";
import { useState } from "react";
import Portal from "./components/Portal";

function App() {
  const [target, setTarget] = useState(document.body);
  const [targetText, setTargetText] = useState("body");
  const handleClick = () => {
    if (target === document.body) {
      const newTarget = document.getElementById("portal");
      setTarget(newTarget);
      setTargetText("portal");
    } else {
      setTarget(document.body);
      setTargetText("body");
    }
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Hedef Değiş</button>
      <div id="portal"></div>
      <Portal target={target} text={targetText} />
    </div>
  );
}

export default App;
