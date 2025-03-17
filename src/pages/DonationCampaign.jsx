import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";


const DonationCampaign = () => {
    //load status type
    const [status, setStatus] = useState([]);
    useEffect(() => {
        fetch("/Status.json")
            .then(res => res.json())
            .then(data => setStatus(data))
    }, [])

    return (
        <div className="bg-green-50 font-poppins">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
                {/*  */}
                <div className="text-center">
                    <h2 className="pt-5 font-medium text-xl">Donation  campaigns </h2>
                    <div className="flex flex-col justify-center md:flex-row gap-5 pt-10 pb-5">
                        {
                            status.map((singleStatus) =>
                                <NavLink className={({ isActive }) => (isActive ? "active-link" : "")}
                                    to={`/donation-campaign/status/${singleStatus.status}`}

                                    key={singleStatus.status_id}>{singleStatus.status}
                                </NavLink>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>

            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default DonationCampaign;