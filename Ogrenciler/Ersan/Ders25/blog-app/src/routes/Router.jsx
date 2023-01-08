import React from "react";
import { useRoutes } from "react-router-dom";
import Homeview from "../views/Homeview";
import PostView from "../views/PostView";
import AboutView from "../views/AboutView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    { path: "/posts", element: <PostView /> },
    { path: "/about", element: <AboutView /> },
  ]);
  return routes;
};

export default Router;
