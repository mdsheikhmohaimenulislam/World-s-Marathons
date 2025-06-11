import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Error from "../Page/Error/Error";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Page/Dashboard/Dashboard";
// import AddMarathon from "../Page/Dashboard/LeftSidePage/AddMarathon";
import MyMarathonList from "../Page/Dashboard/LeftSidePage/MyMarathonList/MyMarathonList";
import MyApplyList from "../Page/Dashboard/LeftSidePage/MyApplyList/MyApplyList";
import PrivateRouter from "../Context/PrivateRouter/PrivateRouter";
import AddMarathon from "../Page/Dashboard/LeftSidePage/AddMarathon/AddMarathon";
import DashboardHome from "../Page/Dashboard/LeftSidePage/DashboardHome/DashboardHome ";
import Marathons from "../Page/Marathons/Marathons";
import MarathonDetails from "../Page/MarathonDetails/MarathonDetails";
import RegistrationPage from "../Page/RegistrationPage/RegistrationPage";
import UpdateMarathon from "../Page/Dashboard/LeftSidePage/MyMarathonList/UpdateMarathon";

export const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     errorElement: <Error />,
  //     Component: Root,
  //     children: [
  //       {
  //         index: true,
  //         path: "/",
  //         Component: Home,
  //       },
  //       {
  //         path: "/dashboard",
  //         element: (
  //           <PrivateRouter>
  //             {" "}
  //             <Dashboard />
  //           </PrivateRouter>
  //         ),
  //       },
  //       {
  //         path: "/addMarathon",
  //         element: (
  //           <PrivateRouter>
  //             <AddMarathon />
  //           </PrivateRouter>
  //         ),
  //       },
  //       {
  //         path: "/myMarathonList",
  //         element: (
  //           <PrivateRouter>
  //             <MyMarathonList />
  //           </PrivateRouter>
  //         ),
  //       },
  //       {
  //         path: "/myApplyList",
  //         element: (
  //           <PrivateRouter>
  //             <MyApplyList />
  //           </PrivateRouter>
  //         ),
  //       },

  //       {
  //         path: "/login",
  //         Component: Login,
  //       },
  //       {
  //         path: "/register",
  //         Component: Register,
  //       },
  //     ],
  //   },

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
        path: "/allMarathons",
        element: (
          <PrivateRouter>
            <Marathons />
          </PrivateRouter>
        ),
      },
      {
        path: "/marathonDetails/:id",
        loader: () => fetch("http://localhost:5000/marathon"),
        element: (
          <PrivateRouter>
            <MarathonDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/registration/:id",
        loader: () => fetch("http://localhost:5000/marathon"),
        element: (
          <PrivateRouter>
            <RegistrationPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
        children: [
          {
            index: true, //  this is what fixes the "right side empty" issue
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/addMarathon", //  relative path
            element: (
              <PrivateRouter>
                <AddMarathon />
              </PrivateRouter>
            ),
          },
          {
            path: "/dashboard/myMarathonList",
            element: (
              <PrivateRouter>
                <MyMarathonList />
              </PrivateRouter>
            ),
          },
        //   {
        //     path: "/dashboard/updateMarathon/:id",
        //     element: (
        //       <PrivateRouter>
        //         <UpdateMarathon />
        //       </PrivateRouter>
        //     ),
        //     loader: ({ params }) =>
        //       fetch(`http://localhost:5000/marathon/${params.id}`),
        //   },

          {
            path: "/dashboard/myApplyList",
            element: (
              <PrivateRouter>
                <MyApplyList />
              </PrivateRouter>
            ),
          },
        ],
      },
    ],
  },
]);
