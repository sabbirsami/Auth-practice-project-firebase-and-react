import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import ServiceDetails from "../components/services/ServiceDetails";
import Login from "../components/shared/Login";
import Register from "../components/shared/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/service/:serviceId",
                element: <ServiceDetails />,
                loader: () => fetch("../services.json"),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
