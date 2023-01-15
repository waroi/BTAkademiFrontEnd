import { useRoutes } from "react-router-dom";
import HomeView from "../Views/HomeView";
import ContactView from "../Views/ContactView";

import React from "react";
import NewsView from "../Views/NewsView";
import NewsDetailsView from "../Views/NewsDetailsView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/contact",
      element: <ContactView />,
    },
    {
      path: "/news/:index",
      element: <NewsDetailsView />,
    },
  ]);
  return routes;
};

export default Router;
