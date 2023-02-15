import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <div className="navbar-brand">Redux İş Takip Projesi</div>
        <div className="d-flex gap-3">
          <button className="btn btn-light btn-sm">Giriş</button>
          <button className="btn btn-primary btn-sm">Kayıt Ol</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
