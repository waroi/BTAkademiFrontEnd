import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/news/">Haberler</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/parametre/1234">Parametre</NavLink>
    </div>
  );
};

export default Navbar;
