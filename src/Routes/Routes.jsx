import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Components/Layouts";
import CreatePost from "../Pages/CreatePost";
import AllPost from "../Pages/AllPost";
import Update from "../Pages/Update";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <CreatePost />,
      },
      {
        path: "/posts",
        element: <AllPost />,
      },
      {
        path: "/edit/:id",
        element: <Update />,
      },
    ],
  },
]);
