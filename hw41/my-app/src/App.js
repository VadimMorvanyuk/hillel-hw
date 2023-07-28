import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Battle from "./components/Battle"
import Popular from "./components/Popular";
import Layout from "./components/Layout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
