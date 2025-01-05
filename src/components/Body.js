import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js"
import RestCard from "./RestaurantCard.js";
import { filterData } from "../config.js"
import searchLogo from "../assets/searchLogo.svg"
import { Link } from "react-router";




const Body = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    useEffect(() => {
        getRestaurant();
    }, []);
    
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2814092&lng=82.99786259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 

    

    return (allRestaurant?.length == 0) ? <Shimmer/> : (
            <div className="body">
                <div className="search" id="search">
                    <input
                        type="search"
                        placeholder="What's on your mind!"
                        className="search-txt"
                        value={searchText}
                        onChange={(str) => {
                            setSearchText(str.target.value);
                        }}
                    />
                    <img
                        src = {searchLogo}
                        className="search-btn"
                        onClick={() => {
                            const filteredData = filterData(searchText, allRestaurant);
                            setFilteredRestaurant(filteredData);
                        }}
                    />
                </div>

                <div id="restaurant-card">
                    {(filteredRestaurant?.length == 0) ? <h1>Sorry Buddy! No Restaurant matches your filter.</h1> :
                    filteredRestaurant.map((restaurant) => {
                        return (
                            <Link to = {"/restaurant/" + restaurant.info.id}>
                                <RestCard {...restaurant.info} key = {restaurant.info.id} />
                            </Link>
                        )
                    })}
                </div>
            </div>

            
    )
}
export default Body;