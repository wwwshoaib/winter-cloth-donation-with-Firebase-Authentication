


const DonationForm = () => {
    return (
        <div className="px-3 border-spacing-1 border-blue-300">
            <form className="p-2">
                <h1 className="text-[16px] md:text-[14px] font-semibold">Help Us Keep Someone Warm!</h1>
                <div className="space-y-1 pt-3">
                    {/* name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[14px] ">Your Name</legend>
                        <input type="text" className="input text-[12px] w-full input-sm" placeholder="Type your name here" />
                    </fieldset>
                    {/* name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[14px]">Your Phone</legend>
                        <input type="text" className="input text-[12px] w-full input-sm" placeholder="Type your phone number" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[14px]">Your Donation (BDT)</legend>
                        <input type="number" className="input w-full text-[12px] input-sm" placeholder="Type your donation"
                        />
                    </fieldset>
                </div>
                <button className="btn bg-green-300 mt-5 w-full text-white font-semibold hover:bg-fuchsia-500 text-md">Donate</button>

            </form>

        </div>
    );
};

export default DonationForm;