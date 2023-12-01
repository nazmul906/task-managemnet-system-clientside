import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default route;
