import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import Home from "./pages/home"
import ErrorBoundary from "./components/ErrorBoundary";

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
