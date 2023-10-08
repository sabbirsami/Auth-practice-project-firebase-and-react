import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="container mx-auto mb-32 ">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Register your account
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="mx-auto flex justify-center ">
                <div className=" border p-14">
                    <form className="">
                        <label
                            htmlFor="name"
                            className="block w-96 pb-2 font-semibold"
                        >
                            Email address
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
                            className="block w-96 pb-2  pt-8 font-semibold"
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
                        <button
                            type="submit"
                            className="w-full mt-8 py-3 bg-emerald-500 text-white"
                        >
                            Register
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        type="submit"
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
