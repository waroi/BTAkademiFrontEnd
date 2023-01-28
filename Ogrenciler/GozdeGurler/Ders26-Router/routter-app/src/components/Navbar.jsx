import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">Haberler</NavLink>
      <NavLink to="/user">Kullanıcı</NavLink>
      <NavLink to="/parametre/1234">Parametre</NavLink>
    </div>
  );
}

export default Navbar;
