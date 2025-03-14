
import Navbar from "./Navbar/Navbar";

const MoreVideos = () => {
    return (
        <div className=" bg-green-50 ">
            <Navbar></Navbar>
            <div className=" w-11/12 mx-auto text-center py-3">
                <h1 className="font-semibold py-2 text-xl">More Videos</h1>
            </div>

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* card-1 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/Al5sXbSuKMc?si=OR-5pMJ4gTW-VfrI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


                {/* card-2 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/9NWsByvqbVE?si=SFU_VTzzwwfNrc81" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* card-3 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/TF-4eZKi-oI?si=qiKPYvOu03TB39NF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* card-4 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/LfLTJlngW3s?si=MdcceS721VZhz7GV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


                {/* card-5 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/9NWsByvqbVE?si=SFU_VTzzwwfNrc81" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* card-6 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/Al5sXbSuKMc?si=OR-5pMJ4gTW-VfrI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    );
};

export default MoreVideos;