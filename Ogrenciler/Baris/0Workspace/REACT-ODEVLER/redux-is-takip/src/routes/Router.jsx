import { useRoutes } from "react-router-dom";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginView /> },
    { path: "/home", element: <HomeView /> },
    { path: "*", element: <div>Page Not Found</div> },
  ]);
  return routes;
};

export default Router;
