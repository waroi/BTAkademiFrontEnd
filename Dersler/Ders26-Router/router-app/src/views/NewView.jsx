import React from "react";
import { Link, Outlet } from "react-router-dom";

const NewView = () => {
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
