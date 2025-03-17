import { Link } from "react-router";
import { NavLink } from "react-router";
import { FaRegUser } from "react-icons/fa6";


const LoginNavbar = () => {
  
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
        <li><NavLink to="/donation-campaign" className={({ isActive }) => (isActive ? "active-link" : "")}>Donation Campaigns</NavLink></li>
        <li><NavLink to="/how-help" className={({ isActive }) => (isActive ? "active-link" : "")}>How to Help</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>Dashboard</NavLink></li>
    </>
    return (
        <div className="w-full px-3 md:px-8 mx-auto navbar bg-green-200 text-gray-700 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <div className="font-dancing">
                        <h1 className="font-bold text-xl md:text-2xl">Winter Cloth <br /> Donation</h1>

                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="login flex gap-2 items-center">
                    <div>
                       

                    </div>
                    <FaRegUser className="size-4 md:size-5"></FaRegUser>
                    <Link to="/auth/register" className=" btn  bg-green-200 ">Register</Link>



                </div>
            </div>
        </div>
    );
};

export default LoginNavbar;