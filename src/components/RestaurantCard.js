import star from "../assets/star.svg";
import { IMG_CDN_LINK } from "../config";

const RestCard = ({name, cloudinaryImageId, avgRating, cuisines,sla }) => {
    return (
        <div id="card">
            <img src={IMG_CDN_LINK + cloudinaryImageId} alt="card-image"></img>
            <div id="name-rating">
                <h4>{name}</h4>
                <div id="rating">
                    <h5>{avgRating}</h5>
                    <img src={star}></img>
                </div>
            </div>
            <div id="Cuisine-time">
                <h4 id="cue">{cuisines.join(", ")}</h4>
                <h4 id = "deliveryTime">{sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}
export default RestCard;