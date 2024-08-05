import { createBrowserRouter, Link } from "react-router-dom";
import TourInfo from "../pages/TourInfo";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "tourInfo/:tourInfoId",
    element: <TourInfo />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 Not found</h1>

        <button>
          <Link to="/">go to Home pages</Link>
        </button>
      </div>
    ),
  },
]);
