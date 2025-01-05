import { IMG_CDN_LINK } from "../config";
import star from "../assets/star.svg"


const Overview = (data) => {

    return(
        <div className="overview">
            <div className="overview-header">
                <h1 id="over-name">{data?.name}</h1>
                <p id="over-cuisine">{data?.cuisines?.join(", ")}</p>
                <p id="address">{data?.areaName +", "+ data?.city}</p>
                <div className="over-rating">
                    <div id="star-rating">
                        <p>{data?.avgRating}</p>
                        <img src={star}></img>
                    </div>
                    <p>( {data?.totalRatingsString} )</p>
                    <p> | </p>
                    <p>{data?.costForTwoMessage}</p>
                </div>
                <p>{data?.deliveryTime}</p>
            </div>
            <img src = {IMG_CDN_LINK + data?.cloudinaryImageId}></img>
        </div>
    );
};

export default Overview