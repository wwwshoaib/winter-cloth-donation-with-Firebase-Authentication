import DonationForm from "../components/DonationForm";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import LatestNews from "../components/LatestNews";
import Video from "../components/Video";
import Footer from "../components/Footer";
import 'animate.css';





const HomeLayout = () => {
    return (
        <div className="bg-green-50">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto text-center py-3 bg-green-50">
                <h1 className="font-semibold text-xl md:text-2xl animate__animated animate__backInLeft">
                    Together, We Can Beat the Cold!</h1>
            </div>
            <div className="py-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 bg-green-50">
                <div className="col-span-9 border-4 border-double">
                    <Slider></Slider>
                </div>
                <div className="col-span-3">
                    <DonationForm></DonationForm>
                </div>
            </div>
            {/* about */}
            <div>
                <About></About>
            </div>
            {/* How it works */}
            <div>
                <HowItWorks></HowItWorks>
            </div>
            {/* Latest News */}
            <div>
                <LatestNews></LatestNews>
            </div>
            {/* video */}
            <div>
                <Video></Video>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;