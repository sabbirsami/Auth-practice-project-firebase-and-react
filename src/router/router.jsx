import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import ServiceDetails from "../components/services/ServiceDetails";
import Login from "../components/shared/Login";
import Register from "../components/shared/Register";
import ConfirmService from "../components/services/ConfirmService";
import PrivateRoute from "../components/shared/PrivateRoute";
import Error from "../components/shared/Error";
import Contact from "../components/shared/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: (
                    <PrivateRoute>
                        <Contact />
                    </PrivateRoute>
                ),
            },
            {
                path: "/purchase",
                element: (
                    <PrivateRoute>
                        <ConfirmService />
                    </PrivateRoute>
                ),
            },
            {
                path: "/service/:serviceId",
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
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
