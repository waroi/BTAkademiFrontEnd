import React from "react";
import { useNavigate } from "react-router-dom";

const AboutView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hakkında</h1>
      <button onClick={() => navigate("/posts")}>
        Gönderiler Sayfasına Git
      </button>
      <button onClick={() => navigate("/")}>AnaSayfaya Git</button>
    </div>
  );
};

export default AboutView;
