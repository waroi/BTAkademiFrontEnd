import React, { useState, useEffect } from "react";

const Deneme = () => {
  let [text, setText] = useState("");
  let [inputText, setInputText] = useState("");
  useEffect(() => {
    setTimeout(function () {
      setText("Varol");
    }, 2000);
  }, [text]);
  useEffect(() => {
    setText("Varol");
  }, []);
  function changeButton() {
    console.log("Tıklandı");
    setText("Hakan");
  }
  function changeText(e) {
    setInputText(e.target.value);
  }
  return (
    <div>
      <h1>Merhaba {text}</h1>
      <button onClick={changeButton}>Değiştir</button>
      <h1>Merhaba {text}</h1>
      <input type="text" onKeyDown={changeText} />
      <p>{inputText}</p>
    </div>
  );
};

export default Deneme;
