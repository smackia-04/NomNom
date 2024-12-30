import star from "../assets/star.svg";

const RestCard = ({name, cloudinaryImageId, avgRating, cuisines,sla }) => {
    return (
        <div id="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="card-image"></img>
            <div id="name-rating">
                <h4>{name}</h4>
                <div id="rating">
                    <h5>{avgRating}</h5>
                    <img src={star}></img>
                </div>
            </div>
            <div id="Cuisine-time">
                <h4>{cuisines.join(", ")}</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}
export default RestCard;