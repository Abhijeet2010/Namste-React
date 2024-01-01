import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./pages/About";
import BodyContainer from "./components/BodyContainer";
import Error from "./pages/Error";

// import SingleRestraurant from "./pages/SingleRestraurant";

const SingleRestraurant = lazy(() => import("./pages/SingleRestraurant"));
const About = lazy(() => import("./pages/About"));

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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/res/:id",
        element: (
          <Suspense fallback={<h1>HElloo</h1>}>
            <SingleRestraurant />,
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approuter} />);
