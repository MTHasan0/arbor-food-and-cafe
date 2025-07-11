
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import React from 'react';
import App from './App.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import AdminPage from './Admin/AdminPage.jsx';
import TableBooking from './Pages/TableBooking/TableBooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/admin-page",
        element: <AdminPage></AdminPage>
      },
      {
        path: "/booking-table",
        element: <TableBooking></TableBooking>
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);