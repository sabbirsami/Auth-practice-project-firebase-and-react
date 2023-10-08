import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Toaster />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
