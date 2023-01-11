import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import ContactView from "../views/ContactView";
import NewPostView from "../views/NewPostView";
import PostView from "../views/PostView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/contact", element: <ContactView /> },
    { path: "/newPost", element: <NewPostView /> },
    { path: "/post/:id/", element: <PostView /> },
  ]);
  return routes;
};

export default Router;
