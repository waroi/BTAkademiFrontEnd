import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Homeview from "../views/Homeview";
import NewView from "../views/NewView";
import UserRoter from "./UserRoter";
import ParametreView from "../views/ParametreView";
import EconomyNewsView from "../views/EconomyNewsView";
import SportsNewsView from "../views/SportsNewsView";
import SportParam from "../views/SportParam";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    { path: "/parametre/:id", element: <ParametreView /> },
    UserRoter,
    {
      path: "/news",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="/news/sports" /> },
        {
          path: "sports",
          element: <SportsNewsView />,
          children: [{ path: ":name", element: <SportParam /> }],
        },
        { path: "economy", element: <EconomyNewsView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
