import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    //state for error validation
    const [error, setError] = useState({});

    //navigate
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Successfully login!');
                navigate(location?.state ? location.state : "/")

            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            })

    }
    return (
        <div>
            {/* Log in Navbar */}
            <LoginNavbar></LoginNavbar>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="bg-white p-10 mt-5 rounded-3xl shadow-2xl w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login your account</h2>
                    <form onSubmit={handleLogin} >
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                <FaEnvelope className="text-gray-500 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full focus:outline-none"

                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full focus:outline-none"
                                    required
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        {/*Showing the error message */}
                        {
                            error.login && (
                                <p className="text-red-500">
                                    {error.login}
                                </p>
                            )
                        }
                        <div className="text-right mb-4">
                            <a href="#" className="text-blue-500 text-sm hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    {/* if no register, go to register */}
                    <p className="text-center font-semibold text-[11px] pt-2">
                        Don’t Have An Account ?
                        go to <Link to="/auth/register" className="btn text-[11px] ">Register </Link>
                    </p>
                </div>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>

    );
};

export default Login;
