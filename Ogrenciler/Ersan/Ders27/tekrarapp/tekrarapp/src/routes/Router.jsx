import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import ActorDetails from "../views/ActorDetails";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "actor/:createdOn", element: <ActorDetails /> },
  ]);
  return routes;
};

export default Router;
