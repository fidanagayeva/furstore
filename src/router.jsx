import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"; 

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
]);
