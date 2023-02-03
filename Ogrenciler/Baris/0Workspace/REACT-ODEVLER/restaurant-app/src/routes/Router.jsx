import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import Dashboard from "../views/DashboardView";
import OrderListView from "../views/OrderListView";
import SettingsView from "../views/SettingsView";
import MenuProcessesView from "../views/MenuProcessesView";
import PageNotFoundView from "../views/PageNotFoundView";
import StaticsAll from "../components/StaticsAll";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { index: true, element: <StaticsAll /> },
        {
          path: "orderlist",
          element: <OrderListView />,
        },
        {
          path: "settings",
          element: <SettingsView />,
        },
        {
          path: "menu",
          element: <MenuProcessesView />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFoundView />,
    },
  ]);
  return routes;
};

export default Router;
