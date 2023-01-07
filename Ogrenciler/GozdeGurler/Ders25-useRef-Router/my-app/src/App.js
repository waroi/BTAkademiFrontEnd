import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();
  const itemsRef = useRef([]);

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
    </div>
  );
}

export default App;
