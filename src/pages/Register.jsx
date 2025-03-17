import { useContext, useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";
import RegistrationNavbar from "../components/RegistrationNavbar";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleFormRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Error validation for name
        if (name.length < 5) {
            setError((prev) => ({ ...prev, name: "Must be more than 5 characters" }));
            return;
        }

        // Creating a new user
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                return updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                });
            })
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                setError((prev) => ({ ...prev, general: err.message }));
            });
    };

    return (
        <div>
            {/* Registration Navbar */}
            <RegistrationNavbar></RegistrationNavbar>
              <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-10 mt-5 rounded-3xl shadow-2xl w-96">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Register your account
                </h2>
                <form onSubmit={handleFormRegister}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                            placeholder="Enter your name"
                        />
                        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            className="w-full border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                            placeholder="Enter your photo URL"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <div className="flex items-center border px-3 py-2 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
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

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className="flex items-center border px-3 py-2 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
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

                    {/* General Error */}
                    {error.general && <p className="text-red-500 text-sm text-center">{error.general}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center font-semibold text-sm pt-2">
                    Already Have An Account?{" "}
                    <Link to="/auth/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
        {/* footer */}
        <Footer></Footer>
        </div>
      
    );
};

export default Register;
