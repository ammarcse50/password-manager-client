import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.jsx";
import Root from "./components/Root.jsx";
import Manager from "./components/Manager.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import Register from "./components/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PassStore from "./components/PassStore.jsx";
import UpdatePass from "./components/UpdatePass.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Manager></Manager>,
      },
      {
        path: "/passstore",
        element: (
          <PrivateRoute>
            <PassStore></PassStore>{" "}
          </PrivateRoute>
        ),
        loader: ()=> fetch(`https://password-manager-server-mine-production.up.railway.app/password`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      
      {
        path: "/update/:id",
        element: <UpdatePass></UpdatePass>,
        loader: ({params})=> fetch(`https://password-manager-server-mine-production.up.railway.app/password/${params.id}`)
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
