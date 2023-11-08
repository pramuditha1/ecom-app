import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div>
      404 page not found! <Link to="home">goto home</Link>
    </div>
  );
};

export default ErrorBoundary;
