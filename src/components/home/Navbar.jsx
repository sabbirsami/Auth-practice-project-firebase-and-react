import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../shared/AuthProvider";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [hide, setHide] = useState(false);

    return (
        <div className="backdrop-blur-lg bg-white/60 sticky top-0 z-50">
            <div className="container mx-auto relative">
                <div className="flex justify-between items-center py-8">
                    <div className="">
                        <img className="w-80" src={logo} alt="" />
                    </div>
                    <nav className="">
                        <ul className="lg:flex gap-6 items-center hidden ">
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
                                <NavLink className={"pb-3"} to={"/purchase"}>
                                    Purchase Service
                                </NavLink>
                            </li>
                            <li>
                                {user ? (
                                    <div className=" border py-2 px-4 flex gap-3 rounded-full items-center">
                                        <p className="">{user.displayName}</p>
                                        <div className="dropdown dropdown-end">
                                            <label
                                                tabIndex={0}
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                            >
                                                <li>
                                                    <button onClick={logOut}>
                                                        Log Out
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink className={"pb-3"} to={"/login"}>
                                        Login
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                        <ul className="">
                            <button onClick={() => setHide(!hide)}>
                                <SlMenu className="text-2xl mx-4 lg:hidden block" />
                            </button>
                            {hide && (
                                <div className="h-screen border w-80 absolute top-0 right-0 p-10 flex flex-col gap-y-8 justify-between items-center bg-white">
                                    <button
                                        onClick={() => setHide(!hide)}
                                        className="text-end ms-auto me-8 mt-6"
                                    >
                                        <RxCross1 className="text-end  text-3xl" />
                                    </button>
                                    <ul className="flex flex-col items-start gap-y-10">
                                        <li>
                                            <NavLink
                                                className={"pb-3"}
                                                to={"/"}
                                            >
                                                Home
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                className={"pb-3"}
                                                to={"/contact"}
                                            >
                                                Contact Us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={"pb-3"}
                                                to={"/purchase"}
                                            >
                                                Purchase Service
                                            </NavLink>
                                        </li>
                                        <li>
                                            {user ? (
                                                <div className=" border py-2 px-4 flex gap-3 rounded-full items-center">
                                                    <p className="">
                                                        {user.displayName}
                                                    </p>
                                                    <div className="dropdown dropdown-end">
                                                        <label
                                                            tabIndex={0}
                                                            className="btn btn-ghost btn-circle avatar"
                                                        >
                                                            <div className="w-10 rounded-full">
                                                                <img
                                                                    src={
                                                                        user.photoURL
                                                                    }
                                                                />
                                                            </div>
                                                        </label>
                                                        <ul
                                                            tabIndex={0}
                                                            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                                        >
                                                            <li>
                                                                <button
                                                                    onClick={
                                                                        logOut
                                                                    }
                                                                >
                                                                    Log Out
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <NavLink
                                                    className={"pb-3"}
                                                    to={"/login"}
                                                >
                                                    Login
                                                </NavLink>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
