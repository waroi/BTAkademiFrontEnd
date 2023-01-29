import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Homeview from "../views/Homeview";
import NewView from "../views/NewView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";
import SportsNewView from "../views/SportsNewView";
import EconomyView from "../views/EconomyView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    {
      path: "/news",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="/news/sports" /> },
        { path: "sports", element: <SportsNewView /> },
        { path: "economy", element: <EconomyView /> },
      ],
    },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};

export default Router;
