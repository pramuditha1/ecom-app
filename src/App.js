import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

import Home from "./pages/home"
import ErrorBoundary from "./components/ErrorBoundary";
import { RootLayout } from "./components/Layout";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
      errorElement:<ErrorBoundary />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
