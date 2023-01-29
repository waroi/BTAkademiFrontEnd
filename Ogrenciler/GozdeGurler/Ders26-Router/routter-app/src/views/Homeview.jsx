import React from "react";
import { useNavigate } from "react-router-dom";

const Homeview = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Anasayfa</h1>
      <button onClick={() => navigate("/news")}>Haberler Sayfasına Git</button>
      <button onClick={() => navigate("/user")}>User Sayfasına Git</button>
      <button onClick={() => navigate("/parametre/1234")}>
        Parametre Sayfasına Git
      </button>
    </div>
  );
};

export default Homeview;
