import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import Dashboard from "../views/DashboardView";
import OrderListView from "../views/OrderListView";
import SettingsView from "../views/SettingsView";
import MenuProcessesView from "../views/MenuProcessesView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
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
  ]);
  return routes;
};

export default Router;
