import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router";



const HowToHelp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
                <div className="bg-gray-100 min-h-screen p-6">
                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-600 mb-4">How to Help</h1>
                        <p className="text-gray-700 text-center mb-6">
                            Join us in bringing warmth to those in need this winter. Here&apos;s how you can help:
                        </p>

                        <div className="space-y-6">
                            <div className="p-4 bg-blue-50 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-blue-700">1. Donate Winter Clothes</h2>
                                <p className="text-gray-600">Gather gently used or new winter clothes and donate them via our platform.</p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-blue-700">2. Register as a Volunteer</h2>
                                <p className="text-gray-600">Sign up to help collect and distribute donations in your local area.</p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-blue-700">3. Spread the Word</h2>
                                <p className="text-gray-600">Share our campaign with friends and family to reach more people in need.</p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-blue-700">4. Make a Financial Contribution</h2>
                                <p className="text-gray-600">Support us with a monetary donation to help with logistics and distribution.</p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <Link to="/auth/register"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
                                Get Involved
                            </Link>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default HowToHelp;