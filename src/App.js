import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home"
import ErrorBoundary from "./components/ErrorBoundary";
import { RootLayout } from "./components/Layout";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";

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
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
      errorElement:<ErrorBoundary />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
