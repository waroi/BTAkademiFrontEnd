import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/contact", element: <ContactView /> },
    { path: "/about", element: <AboutView /> },
  ]);
  return routes;
};

export default Router;
