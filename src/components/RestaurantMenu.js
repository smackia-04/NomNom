import { useParams } from "react-router";
import Overview from "./Overview";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils.js/useRestaurant";


const RestaurantMenu = () => {

    const { restaurantId } = useParams();
    const restaurant = useRestaurant(restaurantId);
    return !restaurant ? <Shimmer /> : (
        <div className="menu-body">
            <Overview {...restaurant} key = {restaurant.id} />
        </div>
    );
};

export default RestaurantMenu;