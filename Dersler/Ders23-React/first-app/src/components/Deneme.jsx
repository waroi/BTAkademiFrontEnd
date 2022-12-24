import React, { useState, useEffect } from "react";

const Deneme = ({ isim, number }) => {
  let [text, setText] = useState("Varol");
  const changeButton = () => {
    setText("Hakan");
  };
  useEffect(() => {
    console.log("Merhaba Varol Yüklendi");
  }, []);
  useEffect(() => {
    console.log("Hakan Hoş Geldin");
  }, [text]);
  return (
    <div>
      <h2>Bu bir test Componenti {number}</h2>
      <p>Merhaba {isim}</p>
      <button onClick={() => changeButton}>Değiştir</button>
    </div>
  );
};

export default Deneme;
