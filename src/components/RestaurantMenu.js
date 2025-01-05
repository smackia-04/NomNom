import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Overview from "./Overview";


const RestaurantMenu = () => {

    const { restaurantId } = useParams();
    useEffect(() => {
        getMenuInfo();
    },[]);
    const [restaurant, setRestaurant] = useState({});

    async function getMenuInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2814092&lng=82.99786259999999&restaurantId="+restaurantId);
        const json = await data?.json();
        console.log(json);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }
    return (
        <div className="menu-body">
            <Overview {...restaurant} key = {restaurant.id} />


        </div>
    );
};

export default RestaurantMenu;