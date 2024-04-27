import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Manager from './components/Manager.jsx';
import Login from './components/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
    {
      path: "/manager",
      element : <Manager></Manager>
    },
    {
      path: "/manager/:id",
      element : <Manager></Manager>,
       loader: ({params})=>fetch(`http://localhost:5000/password/${params.id}`)
    },
    {
      path: "/login",
      element : <Login></Login>
    },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

export default router
