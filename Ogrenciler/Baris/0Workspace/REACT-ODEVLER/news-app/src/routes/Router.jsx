import { useRoutes } from "react-router-dom";
import ContactView from "../views/ContactView";
import HomeView from "../views/HomeView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/contact", element: <ContactView /> },
  ]);
  return routes;
};

export default Router;
