import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOut from "../pages/books/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import PrivateRouter from "./PrivateRouter";
import OrderPage from "../pages/books/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <OrderPage />
          </PrivateRouter>
        ),
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRouter>
            <CheckOut />
          </PrivateRouter>
        ),
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
    ],
  },
]);

export default router;
