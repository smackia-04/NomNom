import logo from "../assets/Logo2.png";
import { Link } from "react-router";
import { useState } from "react";
import useOnline from "../utils.js/useOnline";
import { useSelector } from "react-redux";
import { Cart_Logo } from "../utils.js/helper"



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (!useOnline()) return <h1>🟥 Please check your internet connections!</h1>

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className = "flex justify-between h-20 items-center font-fontall bg-gray-200 sticky z-50 top-0 right-0 left-0">
            
            <div className = "ml-3 p-10" >
                <a href="/">
                <img  className="w-[120px] rounded-2xl border-[1.5px] border-black " src={logo} ></img>
                </a>
                
            </div>
            
            <div >
                <ul className="flex gap-[20px] items-center pr-5 ">
                    <li><Link to = "/"><h2>Home</h2></Link></li>
                    <li><Link to = "/about"><h2>About</h2></Link></li>
                    <li><Link to = "/contact"><h2>Contact</h2></Link></li>
                    <li> {
                    isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}><h2>Log Out</h2></button> : 
                    <button onClick={() => setIsLoggedIn(true)}><h2>Log In</h2></button>
                    }
                    </li>
                    <li><Link to = "/cart" >< Cart_Logo length = {cartItems.length} {...cartItems} /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;