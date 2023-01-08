import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Anasayfa</h1>
      <button onClick={() => navigate("/posts")}>
        Gönderiler Sayfasına Git
      </button>
      <button onClick={() => navigate("/about")}>Hakkında Sayfasına Git</button>
    </div>
  );
};

export default HomeView;
