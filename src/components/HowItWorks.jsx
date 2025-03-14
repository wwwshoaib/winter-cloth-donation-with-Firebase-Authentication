import { TiTick } from "react-icons/ti";


const HowItWorks = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins text-center">
            <h1 className="font-semibold py-2 text-xl">How It Works</h1>
            <p className="text-[13px] p-2 md:p-5 text-start">
                The Winter Donation web application makes it simple for users to donate winter clothing and help those in need across Bangladesh. Follow these easy steps to contribute:
            </p>
            <h2 className="text-md font-semibold pt-2 text-start">1. Donate Winter Clothing</h2>
            <p className="text-[13px] p-2 md:p-5 text-start">
                <strong>. Sign Up & Log In – </strong> Create an account and log in to access the donation campaigns. <br />
                <strong>. Browse Campaigns –  </strong> View active donation drives and see where help is needed most. <br />
                <strong>. Fill Out the Donation Form –  </strong> Provide details about the items you wish to donate, such as jackets, sweaters, blankets, or shawls. <br />
                <strong>. Schedule a Drop-off or Pick-up – </strong> Choose whether to drop off donations at a collection point or request a volunteer pick-up if available. <br />
            </p>

            <h2 className="text-md font-semibold pt-2 text-start">2. Collection Points</h2>
            <p className="text-[13px] p-2 md:p-5 text-start">
                We have designated collection centers in multiple locations for easy drop-off. After submitting the donation form, you will receive the nearest collection point details. Our volunteers will then distribute the clothing to those in need.
            </p>

            <h2 className="text-md font-semibold pt-2 text-start">3. Supported Divisions</h2>
            <p className="text-[13px] p-2 md:p-5 text-start ">
                Our donation drives currently cover all eight divisions of Bangladesh:
                <p className="text-[12px]  text-start">
                    <p className="flex "><TiTick /> Dhaka </p>
                    <p className="flex "><TiTick /> Chattogram </p>
                    <p className="flex "><TiTick /> Rajshahi</p>
                    <p className="flex "><TiTick />Khulna</p>
                    <p className="flex "><TiTick />Barishal</p>
                    <p className="flex "><TiTick />Sylhet</p>
                    <p className="flex "><TiTick />Rangpur</p>
                    <p className="flex "><TiTick />Mymensingh</p>
                </p>
            </p>
        </div>
    );
};

export default HowItWorks;