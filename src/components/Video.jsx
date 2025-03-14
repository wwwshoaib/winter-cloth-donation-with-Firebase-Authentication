import { Link } from "react-router";


const Video = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins text-center">
            <h1 className="font-semibold py-2 text-xl">Our Videos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


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
            </div>
            {/* Button: More news */}
            <div className='text-center py-4'>
                <Link to="/videos" className="btn bg-green-400 mt-5 w-8/12 md:w-3/12 text-white font-semibold hover:bg-fuchsia-500 text-md">
                    More Videos
                </Link>
            </div>
        </div>
    );
};

export default Video;