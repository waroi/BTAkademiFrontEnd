import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import NewsViews from "../views/NewsViews";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/news/:name", element: <NewsViews /> },
  ]);
  return routes;
};

export default Router;
