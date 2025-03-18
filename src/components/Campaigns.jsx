
//import { useLoaderData } from "react-router";

import { useLoaderData } from "react-router";
import Campaign from "./Campaign";

const Campaigns = () => {

    const campaigns = useLoaderData();

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2 mb-4">

                 {
                    campaigns.map(campaign => <Campaign campaign={campaign} key={campaign.id} ></Campaign>)
                } 
            </div>

        </div>
    );
};
export default Campaigns;