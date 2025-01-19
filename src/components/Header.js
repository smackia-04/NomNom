import { Link } from "react-router";
import cart from "../assets/cart.svg";
import logo from "../assets/Logo2.png";
import { useState, useContext } from "react";
import UserContext from "../utils.js/UserContext";
import useOnline from "../utils.js/useOnline";



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    if (!useOnline()) return <h1>🟥 Please check your internet connections!</h1>
    
    return (
        <div className = "flex justify-between h-20 items-center font-fontall bg-gray-200 sticky z-50 top-0 right-0 left-0">
            
            <div className = "ml-3 p-10" >
                <a href="/">
                <img  className="w-[120px] rounded-2xl border-[1.5px] border-black " src={logo} ></img>
                </a>
                
            </div>
            <div >
                <ul className="flex gap-[20px] pr-5 ">
                    <li><Link to = "/home"><h2>Home</h2></Link></li>
                    <li><Link to = "/about"><h2>About</h2></Link></li>
                    <li><Link to = "/contact"><h2>Contact</h2></Link></li>
                    <li> {
                    isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}><h2>Log Out</h2></button> : 
                    <button onClick={() => setIsLoggedIn(true)}><h2>Log In</h2></button>
                    }
                    </li>
                    <li><img src={cart}></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;