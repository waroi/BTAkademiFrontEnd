import { useState } from "react";
import "./App.css";
import Portal from "./components/Portal";

function App() {
  const [target, setTarget] = useState(document.body);
  const [targetText, setTargetText] = useState("Body");

  return (
    <div className="App">
      <button
        onClick={() => {
          if (target === document.body) {
            const newTarget = document.getElementById("portal");
            setTarget(newTarget);
            setTargetText("portal");
          } else {
            const newTarget = document.body;
            setTarget(newTarget);
            setTargetText("body");
          }
        }}
      >
        Hedef Değiştir
      </button>
      <div id="portal"></div>
      <Portal target={target} text={targetText} />
    </div>
  );
}

export default App;
