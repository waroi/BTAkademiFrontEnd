import "./App.css";
import { useRef, useEffect, useState } from "react";
import PortalSample from "./components/PortalSample.jsx";
function App() {
  const inputRef = useRef();
  const itemsRef = useRef([]);
  const customTarget = useRef();
  const [target, setTarget] = useState(document.body);
  const [targetText, setTargetText] = useState("Body'deyim");
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        console.log("focus oldu");
      });
      inputRef.current.addEventListener("keyup", () => {
        console.log(inputRef.current.value);
      });
    }
  }, [inputRef]);
  useEffect(() => {
    itemsRef.current.map((item) => console.log(item));
  }, []);
  return (
    <div className="App">
      <div ref={customTarget}></div>
      <PortalSample target={target} text={targetText} />
      <button
        onClick={() => {
          if (targetText === "Body'deyim") {
            setTarget(customTarget.current);
            setTargetText("customTarget'dayım");
          } else {
            setTarget(document.body);
            setTargetText("Body'deyim");
          }
        }}
      >
        Hedef Değiştir
      </button>
      {/* <input type="text" ref={inputRef} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return (
          <div
            key={item}
            value={item}
            className="item test deneme"
            ref={() => (itemsRef.current[index] = index)}
            onClick={(e) => {
              console.log(e.target);
              console.log(itemsRef.current[item]);
            }}
            style={{
              width: `${item * 10}px`,
              height: "20px",
              background: "red",
            }}
          ></div>
        );
      })}
      <button
        onClick={() => {
          console.log(itemsRef.current[2].style.width);
          console.log(itemsRef.current[2].classList);
        }}
      >
        Göster
      </button> */}
    </div>
  );
}

export default App;
