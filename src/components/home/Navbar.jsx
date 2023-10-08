import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
    return (
        <div className="backdrop-blur-lg bg-white/60 sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-8">
                    <div className="">
                        <img className="w-80" src={logo} alt="" />
                    </div>
                    <nav className="">
                        <ul className="flex gap-6">
                            <li>
                                <NavLink className={"pb-3"} to={"/"}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className={"pb-3"} to={"/contact"}>
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"pb-3"} to={"/login"}>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
