import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/news">Haberler</NavLink>
      <NavLink to="/iletisim">iletisim</NavLink>
    </div>
  );
};

export default Navbar;
