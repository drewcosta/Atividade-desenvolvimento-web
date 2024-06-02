import { createBrowserRouter } from "react-router-dom";

// pages
import { Landing, Register } from "../Pages";

// components
import { DefaultLayout } from "../Components/Layout";

// authentication 
import { PrivateRoutes } from "../Helpers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          // {
          //   path: '/list',
          //   element: <List />,
          // }
        ]
      }
    ],
  },
  { path: '/login', element: <Register />, },
  { path: '/register', element: <Register /> },
]);

export default router;