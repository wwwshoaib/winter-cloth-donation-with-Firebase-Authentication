
import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName, photoURL } = user;
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto flex flex-col items-center" >

                <div className="text-center py-5 text-2xl font-semibold">
                    <h2 className="animate__animated animate__fadeInTopRight ">Welcome {displayName}!</h2>
                </div>


                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
                    <img
                        alt="user-picture-missing"
                        src={photoURL}
                    />

                    <div className="p-4 sm:p-6">

                        <h3 className="text-lg font-medium text-gray-900">
                            User Name: {displayName}
                        </h3>
                        <h6 className="text-sm font-medium text-gray-900">
                            User Email: {email}
                        </h6>




                        <Link to="/auth/register" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                            Update your profile

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </Link>
                    </div>
                </article>

            </div>


        </div>
    );
};

export default Dashboard;