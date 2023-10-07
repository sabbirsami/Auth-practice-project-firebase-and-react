import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
    return (
        <div className="backdrop-blur-sm bg-white/30">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-8">
                    <div className="">
                        <img className="w-80" src={logo} alt="" />
                    </div>
                    <nav className="">
                        <ul className="flex gap-6">
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/events"}>Events</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
