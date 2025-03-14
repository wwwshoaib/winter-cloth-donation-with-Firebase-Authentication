import Img1 from '../../src/assets/1.jpg'
import Img2 from '../../src/assets/2.webp'
import Img3 from '../../src/assets/3.jpg'
import { Link } from 'react-router';


const LatestNews = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins text-center">
            <h1 className="font-semibold py-2 text-xl">Latest News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                {/* card-1 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <figure>
                        <img className='h-44 w-full'
                            src={Img1}
                            alt="Qatar-charity-pic" />

                    </figure>
                    <span className="text-start text-[10px] p-1">06/01/2025 in Bangladesh</span>

                    <p className="text-[12px] text-start p-2">Qatar Charity  Winter Relief Efforts: As part of its How Long winter campaign, Qatar Charity provided winterization kits, including blankets, jackets, and hoodies, to 11,000 individuals in Bangladesh, focusing on sponsored orphans and their families.</p>
                </div>


                {/* card-2 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <figure>
                        <img className='h-44 w-full'
                            src={Img2}
                            alt="UIU-students-pic" />

                    </figure>
                    <span className="text-start text-[10px] p-1">19/12/2023 at Fulbari, Kurigram</span>

                    <p className="text-[12px] text-start p-2"> UIU Distributes Winter Clothes: The United International University (UIU) Social Services Club organized a winter clothes distribution among cold-stricken people in Fulbari upazila, Kurigram. Students collected over 500 winter clothes and distributed them to more than 700 families across eight villages.</p>
                </div>

                {/* card-3 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <figure>
                        <img className='h-44 w-full'
                            src={Img3}
                            alt="SNDC-pic" />
                    </figure>
                    <span className="text-start text-[10px] p-1">01/01/2022 in Barishal</span>

                    <p className="text-[12px] text-start p-2">SNDC Distributes Winter Clothes to Underprivileged Children
                        As part of its annual initiative, SNDC, a social organization dedicated to supporting underprivileged children, distributed winter clothes (blankets) to over 50 children with the support of the Barishal District Administration.</p>
                </div>
            </div>
            {/* Button: More news */}
            <div className='text-center py-4'>
                <Link to="/news" className="btn bg-green-400 mt-5 w-8/12 md:w-3/12 text-white font-semibold hover:bg-fuchsia-500 text-md">
                    More News
                </Link>
            </div>
        </div>
    );
};

export default LatestNews;