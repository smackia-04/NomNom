import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (restaurantId) => {

    const [resDetails, setResDetails] = useState(null);
    const [resMenu, setResMenu] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await fetch(FETCH_MENU_URL + restaurantId)
            const json = await response?.json();
            const restaurantData =
                json?.data?.cards
                    ?.map((x) => x.card)
                    ?.find(
                    (x) =>
                        x &&
                        x.card["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                    )?.card?.info || null;

                    const restaurantMenu =
                        json?.data?.cards
                            ?.find((x) => x.groupedCard)
                            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x?.card?.card)
                            .filter(
                            (x) =>
                                x["@type"] ===
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                            ) || [];
                    setResDetails(restaurantData);
                    setResMenu(restaurantMenu); 
        })();
    }, [])
    
    return [resDetails, resMenu];
};

export default useRestaurant;