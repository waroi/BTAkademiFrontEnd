import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import PostView from "../views/PostView";

import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/posts",
      element: <PostView />,
      children: [
        { index: true, element: <Navigate to="/posts/parametre:id" /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
