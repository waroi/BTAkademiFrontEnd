import React from "react";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={() => navigate("/news")}>Haberler Sayfasına Git</button>
      <button onClick={() => navigate("/")}>Anasayfaya Git</button>
    </div>
  );
};

export default UserView;
