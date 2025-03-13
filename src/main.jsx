import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Root from "./layouts/Root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      
    ]
  }, 
  {
    path: "/about",
    element: <div className="flex  justify-center text-3xl text-red-400 items-center p-6">I am now at about page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);