import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.jsx";
import Root from "./components/Root.jsx";
import Manager from "./components/Manager.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import Register from "./components/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PassStore from "./components/PassStore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Manager></Manager> 
      },
      {
        path: "/passstore",
        element: <PrivateRoute><PassStore></PassStore> </PrivateRoute> 
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
 
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

export default router;
