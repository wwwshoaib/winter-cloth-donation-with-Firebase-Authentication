import PropTypes from "prop-types";

const Campaign = ({ campaign }) => {
    const { image, title, description, division} = campaign;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm border-4 border-double">
                <figure>
                    <img className='h-44 w-full'
                        src={image}
                        alt="Qatar-charity-pic" />

                </figure>
                <div className="p-3 space-y-2">
                    <p className="text-start text-md font-semibold ">{title}</p>
                    <p className="text-[12px] text-start ">{description}</p>
                    <p className="text-[12px]">Division: {division}</p>
                </div> 
                {/* button */}
                <div className="p-3">
                    <button className="btn bg-green-400 text-white ">Donate Now</button>
                </div>

            </div>

        </div>
    );
};
Campaign.propTypes = {
    campaign: PropTypes.object
}
export default Campaign;