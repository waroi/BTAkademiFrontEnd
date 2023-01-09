import { Outlet, Link } from "react-router-dom";

const SportsNewsView = () => {
  return (
    <div>
      <h1>Spor Haberleri</h1>
      <Link to="/news/sports/basketball">Basketbol Haberleri</Link>
      <Link to="/news/sports/football">Futbol Haberleri</Link>
      <Outlet />
    </div>
  );
};

export default SportsNewsView;
