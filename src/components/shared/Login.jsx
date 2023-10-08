import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
    const { signInWithGoogle, loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [alreadyUsedEmailMessage, setAlreadyUsedEmailMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoading(false);
                setAlreadyUsedEmailMessage("");
                toast.success("Successfully Login", {
                    duration: 2000,
                    className: "mt-32",
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setAlreadyUsedEmailMessage(err.message);
                toast.error(" Login fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully Login", {
                    duration: 2000,
                    className: "mt-32",
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error(" Login fail", {
                    duration: 2000,
                    className: "mt-32",
                });
            });
    };
    return (
        <div className="container mx-auto mb-32 ">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Login your account
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="mx-auto flex justify-center ">
                <div className=" border p-14">
                    <form className="" onSubmit={handleSubmit}>
                        <label
                            htmlFor="email"
                            className="block w-96 pb-2 font-semibold"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border w-full py-3 px-4 bg-slate-100"
                            placeholder="Enter your email address"
                        />
                        <label
                            htmlFor="password"
                            className="block w-full pb-2 pt-8 font-semibold"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="border w-full py-3 px-4 bg-slate-100"
                            placeholder="Enter your password"
                        />
                        <label className="block w-96  text-sm text-red-600">
                            {alreadyUsedEmailMessage}
                        </label>
                        <button
                            type="submit"
                            className="w-full mt-8 py-3 bg-emerald-500 text-white"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-xs"></span>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleSignInWithGoogle}
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 py-3 border border-emerald-500 text-dark"
                    >
                        <FcGoogle className="text-2xl"></FcGoogle>Login with
                        Google
                    </button>
                    <p className=" pt-6">
                        Don&#39;t have any account?{" "}
                        <Link
                            className="underline text-blue-600"
                            to={"/register"}
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
