import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const NewView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Haberler</h1>
      <Link to="economy">Ekonomi Sayfası</Link>
      <Link to="sports">Spor Sayfası</Link>
      <Outlet />
    </div>
  );
};

export default NewView;
