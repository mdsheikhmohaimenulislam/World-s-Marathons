import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Error from "../Page/Error/Error";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Page/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
            {
        path: "/dashboard",
        Component: Dashboard,
      },
            {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
