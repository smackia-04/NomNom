import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js"
import RestCard from "./RestaurantCard.js";
import { filterData } from "../utils.js/helper.js"
import searchLogo from "../assets/searchLogo.svg"
import { Link } from "react-router";
import { FETCH_RESTAURANTS_URL } from "../utils.js/constants.js";
import useOnline from "../utils.js/useOnline.js";




const Body = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        getRestaurant();
    }, []);
    async function getRestaurant() {
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (allRestaurant?.length == 0) ? <Shimmer /> : (
        <div className="body bg-gray-50 font-fontall">
            <div className="flex flex-wrap justify-center items-center gap-[2px] p-3 " id="search">
                <input
                    type="search"
                    placeholder="What's on your mind!"
                    className="border-2 border-gray-700 justify-center items-center w-[35%] h-[45px] bg-white "
                    value={searchText}
                    onChange={(str) => {
                        setSearchText(str.target.value);
                    }}
                />
                <img
                    src={searchLogo}
                    className="size-[40px]"
                    onClick={() => {
                        const filteredData = filterData(searchText, allRestaurant);
                        setFilteredRestaurant(filteredData);
                    }}
                />
            </div>

            <div className="flex flex-wrap gap-4 ml-12 mr-8">
                {(filteredRestaurant?.length == 0) ? <h1>Sorry Buddy! No Restaurant matches your filter.</h1> :
                    filteredRestaurant.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.info.id}>
                                <RestCard {...restaurant.info} key={restaurant.info.id} />
                            </Link>
                        )
                    })}
            </div>
        </div>


    )
}
export default Body;