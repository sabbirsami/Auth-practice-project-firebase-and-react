import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";

const Register = () => {
    const { signInWithGoogle, createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPasswordValidationMessage, setShowPasswordValidationMessage] =
        useState("");
    const [alreadyUsedEmailMessage, setAlreadyUsedEmailMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const checkPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (checkPassword.test(password)) {
            setShowPasswordValidationMessage("");
            createUser(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                    });
                    toast.success("Successfully Register", {
                        duration: 2000,
                        className: "mt-32",
                    });
                    setLoading(false);
                    setAlreadyUsedEmailMessage("");
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setAlreadyUsedEmailMessage(err.message);
                    toast.error(" Register fail", {
                        duration: 2000,
                        className: "mt-32",
                    });
                });
            console.log("ok");
        } else {
            setLoading(false);
            return setShowPasswordValidationMessage(
                "Password must contain at least one uppercase letter, one special character and be at least 6 characters long"
            );
        }
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
                setAlreadyUsedEmailMessage("");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error(" Login fail", {
                    duration: 2000,
                    className: "mt-32",
                });
                setAlreadyUsedEmailMessage(err.message);
            });
    };
    return (
        <div className="container mx-auto mb-32 ">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Register your account
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="mx-auto flex justify-center ">
                <div className=" border md:p-14 p-6">
                    <form className="" onSubmit={handleSubmit}>
                        <label
                            htmlFor="name"
                            className="block md:w-96 w-full pb-2 font-semibold"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="border w-full py-3  px-4 bg-slate-100"
                            placeholder="Enter your name"
                        />
                        <label
                            htmlFor="email"
                            className="block w-full pb-2  pt-8 font-semibold"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            required
                            className="border w-full py-3 px-4 bg-slate-100"
                            placeholder="Enter your photo URL"
                        />
                        <label
                            htmlFor="email"
                            className="block w-full pb-2  pt-8 font-semibold"
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
                        <label className="block md:w-96 w-full text-sm text-red-600">
                            {showPasswordValidationMessage}
                        </label>
                        <label className="block md:w-96 w-full  text-sm text-red-600">
                            {alreadyUsedEmailMessage}
                        </label>

                        <button
                            type="submit"
                            className="w-full mt-8 py-3 bg-emerald-500 text-white"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-xs"></span>
                            ) : (
                                "Register"
                            )}
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        type="submit"
                        onClick={handleSignInWithGoogle}
                        className="w-full flex items-center justify-center gap-3 py-3 border border-emerald-500 text-dark"
                    >
                        <FcGoogle className="text-2xl"></FcGoogle>Login with
                        Google
                    </button>
                    <p className=" pt-6">
                        Already have an account?{" "}
                        <Link className="underline text-blue-600" to={"/login"}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
