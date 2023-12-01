import Main from "../MainLayout/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
export default route;
