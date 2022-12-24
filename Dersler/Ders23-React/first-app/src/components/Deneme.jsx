import React, { useState, useEffect } from "react";

const Deneme = () => {
  let [text, setText] = useState("");
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
  return (
    <div>
      <h1>Merhaba {text}</h1>
      <button onClick={changeButton}>Değiştir</button>
    </div>
  );
};

export default Deneme;
