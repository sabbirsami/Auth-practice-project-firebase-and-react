import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
    return (
        <div className="backdrop-blur-lg bg-white/60">
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
                                <NavLink className={"pb-3"} to={"/events"}>
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"pb-3"} to={"/about"}>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={"pb-3"} to={"/contact"}>
                                    Contact Us
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
