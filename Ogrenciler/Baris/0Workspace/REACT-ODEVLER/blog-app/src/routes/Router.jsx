import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
import NewPostView from "../views/NewPostView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/contact", element: <ContactView /> },
    { path: "/about", element: <AboutView /> },
    { path: "/newPost", element: <NewPostView /> },
  ]);
  return routes;
};

export default Router;
