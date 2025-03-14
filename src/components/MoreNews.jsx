import Navbar from "./Navbar/Navbar";
import Img2 from '../../src/assets/2.webp'
import Img3 from '../../src/assets/3.jpg'
import Img1 from '../../src/assets/1.jpg'
import Img4 from '../../src/assets/Distribution-of-winter-clothing-2023-1.jpg'



const MoreNews = () => {
    return (
        <div className=" bg-green-50 ">
            <Navbar></Navbar>
            <div className=" w-11/12 mx-auto text-center py-3">
                <h1 className="font-semibold py-2 text-xl">More News</h1>
            </div>

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

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
                {/* card-4 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <figure>
                        <img className='h-44 w-full'
                            src={Img4}
                            alt="chattagram-pic" />
                    </figure>
                    <span className="text-start text-[10px] p-1">15/12/2023 in Chattagram</span>

                    <p className="text-[12px] text-start p-2">The distribution of blankets and various types of winter clothes as winter clothes to the needy, poor, helpless, orphans, widows and disabled people of Chattagram</p>
                </div>


                {/* card-5 */}
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

                {/* card-6 */}
                <div className="card bg-base-100  shadow-sm border-4 border-double">
                    <figure>
                        <img className='h-44 w-full'
                            src={Img1}
                            alt="chattaogram-pic" />
                    </figure>
                    <span className="text-start text-[10px] p-1">15/12/2023 in Chattagram</span>

                    <p className="text-[12px] text-start p-2">The distribution of blankets and various types of winter clothes as winter clothes to the needy, poor, helpless, orphans, widows and disabled people of Chattagram</p>
                </div>

            </div>

        </div>
    );
};

export default MoreNews;