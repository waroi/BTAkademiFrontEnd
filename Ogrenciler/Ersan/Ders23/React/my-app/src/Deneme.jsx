import React from "react";

const Deneme = ({ isim, number }) => {
  return (
    <div>
      <h2>Bu bir test componentidir {number}</h2>
      <p>Merhaba {isim}</p>
    </div>
  );
};

export default Deneme;
