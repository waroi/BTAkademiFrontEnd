import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Homeview from "../views/Homeview";
import NewView from "../views/NewView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";
import SportsNewView from "../views/SportsNewView";
import EconomyNewView from "../views/EconomyNewView";
import SportParam from "../views/SportParam";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/news",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="/news/sports" /> },
        {
          path: "sports",
          element: <SportsNewView />,
          children: [{ path: ":name", element: <SportParam /> }],
        },
        { path: "economy", element: <EconomyNewView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
