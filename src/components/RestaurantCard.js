import star from "../assets/star.svg";
import { IMG_CDN_LINK } from "../utils.js/constants";

const RestCard = ({name, cloudinaryImageId, avgRatingString, cuisines,sla }) => {
    return (
        <div className="flex flex-col justify-between w-[250px] h-[320px] rounded-xl bg-gray-50 hover:bg-gray-50 p-2 m-3 hover:shadow-lg ">
            <img className="h-[225px] rounded-xl w-full" src={IMG_CDN_LINK + cloudinaryImageId} alt="card-image"></img>
            <div className="flex items-center justify-between text-[17px] font-medium">
                <h4 className="w-[190px] ">{name}</h4>
                <div className="flex gap-[2px] text-[14px] justify-between bg-green-600 rounded-md pl-1 pr-1">
                    <h5 className="text-white font-bold" >{avgRatingString}</h5>
                    <img src={star}></img>
                </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-thin">
                <h4 className="w-[70%]">{cuisines.join(", ")}</h4>
                <h4 id = "deliveryTime">{sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}
export default RestCard;