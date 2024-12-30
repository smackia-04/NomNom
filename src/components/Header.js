import cart from "../assets/cart.svg";
import logo from "../assets/Logo.png";
import { useState } from "react";



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div id = "header">
            <div id = "logo">
                <ul>
                    <li><img src={logo} alt="Logo"></img></li>
                    <li><h1>🇿‌🇮‌🇬‌🇬‌🇾‌</h1></li>
                </ul>
            </div>
            <div id = "nav-items">
                <ul>
                    <li><h2>Home | </h2></li>
                    <li><h2>About Us | </h2></li>
                    <li><h2>Contact Us | </h2></li>
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