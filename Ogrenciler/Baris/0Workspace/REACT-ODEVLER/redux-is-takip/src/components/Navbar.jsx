import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary shadow-sm sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand">Redux İş Takip Projesi</div>
        <div className="d-flex gap-3">
          <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/")}
          >
            Giriş
          </button>
          <button
            className="btn btn-primary btn-sm bg-gradient text-white"
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
