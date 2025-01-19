import { IMG_CDN_LINK } from "../utils.js/constants";
import star from "../assets/star2.svg"


const Overview = (data) => {

    return(
        <div className="flex justify-between items-center ml-12 mr-8 p-3  border-b-2 ">
            <div className="flex flex-col ">
                <h1 className="text-[40px] text-gray-900 ">{data?.name}</h1>
                <p className="font-extralight text-lg text-blue-gray-900 ">{data?.cuisines?.join(", ")}</p>
                <p className="text-[16px] text-gray-700 ">{data?.areaName +", "+ data?.city}</p>
                <div className="flex gap-2 items-center text-gray-700 ">
                    <div className="flex gap-[2px] item-center ">
                        <p>{data?.avgRating}</p>
                        <img className="" src={star}></img>
                    </div>
                    <p>( {data?.totalRatingsString} )</p>
                    <p> | </p>
                    <p>{data?.costForTwoMessage}</p>
                </div>
                <p>{data?.deliveryTime}</p>
            </div>
            <img className="w-[200px] rounded-xl " src = {IMG_CDN_LINK + data?.cloudinaryImageId}></img>
        </div>
    );
};

export default Overview