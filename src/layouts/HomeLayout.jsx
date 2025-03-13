import DonationForm from "../components/DonationForm";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider";





const HomeLayout = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto text-center py-3 bg-green-50">
                <h1 className="font-semibold text-xl md:text-2xl">Together, We Can Beat the Cold!</h1>
            </div>
            <div className="py-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 bg-green-50">
                <div className="col-span-9 border-4 border-double">
                    <Slider></Slider>
                </div>
                <div className="col-span-3">
                    <DonationForm></DonationForm>
                </div>

            </div>


        </div>
    );
};

export default HomeLayout;