import { useRoutes } from "react-router-dom";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/HomeView";
import PageNotFound from "../views/PageNotFound";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginView /> },
    { path: "/register", element: <RegisterView /> },
    { path: "/home", element: <HomeView /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default Router;
