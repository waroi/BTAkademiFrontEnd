import React from "react";
import { useParams } from "react-router-dom";

const ParametreView = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Parametre Sayfas</h1>
      <h3>Parametre: {id}</h3>
    </div>
  );
};

export default ParametreView;
