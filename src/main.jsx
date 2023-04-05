import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/shop/Shop';
import Home from './component/layout/Home';
import Orders from './component/order/Orders';
import Inventaroy from './component/inventaroy/Inventaroy';
import Login from './component/login/Login';
import cardProductsLoader from './loader/LoaderCardProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader:cardProductsLoader
      },
      {
        path: "inventory",
        element: <Inventaroy></Inventaroy>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
        
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
