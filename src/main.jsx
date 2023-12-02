import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import route from "./Routes/Route.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <RouterProvider router={route}></RouterProvider>
    </React.StrictMode>
  </div>
);
