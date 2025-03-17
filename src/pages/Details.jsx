import { useLoaderData } from "react-router";
import toast from "react-hot-toast";




const Details = () => {
    const campaign = useLoaderData();

    const { title, description, image, status, division, contactInfo } = campaign;
    // Handle donation form

    const handleForm = e => {
        e.preventDefault();
        toast.success('Thank you! We will reach your destination soon');
        e.target.reset();
    }
       

    return (
        <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 ">
                {/* campaign details */}
                <div className="col-span-8">

                    {/* details */}
                    <div className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
                        <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
                            <div
                                className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md"
                            >
                                <div className="rounded-t-xl   shadow-sm bg-cover">
                                    <img className="w-full"
                                        src={image} alt="" />
                                </div>

                                <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                                    <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                                        {title}
                                    </h1>
                                    <p className="text-sm">{description}</p>
                                    <p className="text-sm font-semibold">Contact: {contactInfo}</p>
                                    <p className="text-[12px]">Status: {status}</p>
                                    <p className="text-[12px]">Division: {division}</p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* form for the donation */}
                <div className="col-span-4">
                    <div className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
                        <div className="w-full text-left flex flex-col  items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
                            <div className="px-3 border-spacing-1 border-blue-300">
                                <form onSubmit={handleForm} className="p-2">
                                    <h1 className="text-[16px] md:text-[14px] font-semibold">Fill up the form for the donation:</h1>
                                    <div className="space-y-1 pt-3">
                                        {/* Quantity */}
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend text-[14px] ">Quantity of items*:</legend>
                                            <input type="number" className="input text-[13px] w-full input-sm" placeholder="Type number of items"required />
                                        </fieldset>
                                        {/* Types */}
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend text-[14px]">Item types (e.g. blanket, jacket, sweater)*:</legend>
                                            <input type="text" className="input text-[13px] w-full input-sm" placeholder="Type items" required />
                                        </fieldset>
                                        {/* Location */}
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend text-[14px]">Pickup Location*</legend>
                                            <input type="text" className="input text-[13px] w-full input-sm" placeholder="Type pickup location" required />
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend text-[14px]">Additional notes:</legend>
                                            <input type="text" className="input w-full text-[12px] input-sm" placeholder="What you want to say us"
                                            />
                                        </fieldset>
                                    </div>
                                    <button 
                                    className="btn bg-green-300 mt-5 w-full text-white font-semibold hover:bg-fuchsia-500 text-md">Donate</button>

                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default Details;
