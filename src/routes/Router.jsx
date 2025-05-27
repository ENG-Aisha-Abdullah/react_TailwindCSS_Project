import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Career from "../pages/Career";
import SupportHome from "../pages/SupportHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "career", element: <Career /> },
      { path: "support", element: <SupportHome /> },
      // {
      //   path: "news",
      //   element: <NewsTaps />,
      //   children: [
      //    { path: "tapall", element: <TapAll /> },
      //    { path: "activision", element: <TapActivision /> },
      //   ],
      // },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Router;
