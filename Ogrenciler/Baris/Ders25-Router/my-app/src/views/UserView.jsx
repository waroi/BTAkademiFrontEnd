import React from "react";
import { useNavigate } from "react-router-dom"; //Link componentinide kullanabiliriz

const UserView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Sayfası</h1>
      <button onClick={() => navigate("/news")}>News</button>
      <button onClick={() => navigate("/")}>Anasayfa</button>
    </div>
  );
};

export default UserView;
