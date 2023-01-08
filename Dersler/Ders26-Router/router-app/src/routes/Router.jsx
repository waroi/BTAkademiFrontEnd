import React from "react";
import { useRoutes } from "react-router-dom";
import Homeview from "../views/Homeview";
import NewView from "../views/NewView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    { path: "/news", element: <NewView /> },
  ]);
  return routes;
};

export default Router;
