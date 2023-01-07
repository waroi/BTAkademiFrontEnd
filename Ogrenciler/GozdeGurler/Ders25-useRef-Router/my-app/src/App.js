import "./App.css";
import { useRef, useEffect } from "react";
import { useState } from "react";
import PortalSample from "./components/PortalSample";

function App() {
  const inputRef = useRef();
  const itemsRef = useRef([]);
  const customTarget = useRef();
  const [target, setTarget] = useState(document.body);
  const [targetText, setTargetText] = useState("Body'deyim");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        console.log("Focus oldu.");
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
      <input type="text" ref={inputRef} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return (
          <div
            className="item test deneme"
            key={item}
            onClick={(e) => {
              console.log(itemsRef.current[item]);
            }}
            ref={() => (itemsRef.current[item] = item)}
            style={{
              width: `${index * 10}px`,
              height: "20px",
              background: "red",
            }}
          >
            {" "}
          </div>
        );
      })}
      <button
        onClick={() => {
          console.log(itemsRef.current[2].style.width);
          console.log(itemsRef.current[2].value);
          console.log(itemsRef.current[2].classList);
        }}
      >
        Show
      </button>

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
    </div>
  );
}

export default App;
