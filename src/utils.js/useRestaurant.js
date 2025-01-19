import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (restaurantId) => {

    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
        (async () => {
            const response = await fetch(FETCH_MENU_URL + restaurantId)
            const json = await response?.json();
            setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        })();
    }, [])
    
    return restaurant;
};

export default useRestaurant;