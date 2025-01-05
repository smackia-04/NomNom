import { Link } from "react-router";
import cart from "../assets/cart.svg";
import logo from "../assets/Logo.png";
import { useState } from "react";
// import { Link } from "react-router";



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div id = "header">
            
            <div id = "logo">
                <ul>
                    <li><a href="/" ><img src={logo} alt="Logo"></img></a></li>
                    <li><a href="/" ><h1>🇿‌🇮‌🇬‌🇬‌🇾‌</h1></a></li>
                </ul>
            </div>
            <div id = "nav-items">
                <ul>
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