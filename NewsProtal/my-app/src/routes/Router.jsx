import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,

} from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../pages/Home/Home ';
import Login from '../pages/login/login';
import Register from '../pages/register/register';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path: '/home',
            element:<Home></Home>
        },
        {
          path: '/Login',
          element:<Login></Login>
      },
      {
        path: '/Register',
        element:<Register></Register>
    }
      ]
    },
  ]);
export default router;