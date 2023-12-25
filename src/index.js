import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import BodyContainer from "./components/BodyContainer";
import Error from "./pages/Error";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approuter} />);
