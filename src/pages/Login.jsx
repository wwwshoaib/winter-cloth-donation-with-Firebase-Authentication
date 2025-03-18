import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoginNavbar from "../components/LoginNavbar";
import Footer from "../components/Footer";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../provider/AuthProvider";
import { useRef } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
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
    //handle forgot password
    const handleForgotPassword = () => {
        // console.log('get me emaill address', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide a valid email address!')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password Reset email sent, please check your email')
                })
        }
    }

    return (
        <div>
            {/* Log in Navbar */}
            <LoginNavbar></LoginNavbar>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <div className=" p-10 mt-5 rounded-3xl shadow-2xl w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login your account</h2>
                    <form onSubmit={handleLogin} >
                        <div className="mb-6">
                            <label className="block text-white font-medium mb-2">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                <FaEnvelope className="text-gray-500 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    className="w-full focus:outline-none text-white bg-gradient-to-r from-blue-400 to-purple-500"

                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-medium mb-2">Password</label>
                            <div className="relative flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="w-full focus:outline-none text-white bg-gradient-to-r from-blue-400 to-purple-500"
                                    required
                                    placeholder="Enter your password"
                                />
                                {/* Toggle Show/Hide Password */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-2 right-3 text-white hover:text-gray-700"
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
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
                        <div className="text-left mb-4">
                            <label onClick={handleForgotPassword}
                                className="label">
                                <a href="#" className="label-text-alt link text-white link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    {/* if no register, go to register */}
                    <p className="text-center font-semibold text-[14px] pt-2">
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
