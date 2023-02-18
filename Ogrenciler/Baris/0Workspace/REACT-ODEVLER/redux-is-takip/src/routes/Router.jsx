import { useRoutes } from "react-router-dom";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/HomeView";
import PageNotFound from "../views/PageNotFound";
import Dashboard from "../components/Dashboard";
import Employees from "../components/Employees";
import EmployeeNewForm from "../components/EmployeeNewForm";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginView /> },
    { path: "/register", element: <RegisterView /> },
    {
      path: "/dashboard",
      element: <HomeView />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "newEmployee",
          element: <EmployeeNewForm />,
        },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default Router;