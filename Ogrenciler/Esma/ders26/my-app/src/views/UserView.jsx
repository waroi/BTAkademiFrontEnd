import React from "react";
import { useNavigate } from "react-router-dom";

const NewView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Haberler</h1>
      <button onClick={() => navigate("/")}>Asayfa'ya Git</button>
    </div>
  );
};

export default NewView;
