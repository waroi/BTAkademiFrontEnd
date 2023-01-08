import React from "react";
import { useRoutes } from "react-router-dom";
import Homeview from "../views/Homeview";
import NewView from "../views/NewView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    { path: "/news", element: <NewView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};

export default Router;
