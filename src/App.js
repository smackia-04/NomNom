import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";



/*
Header
    - Logo
        - image
        - name
    - Nav-items
        - Home
        - About us
        - Cantact us
    - Sign in
    - Cart

Body
    -Search
    - Restaurant List
        - Restaurant card
            - Image
            - Name
            - Cuisine
            - Rating
            - Time Taken

Footer
    - Contact
    - About
    - copyright
*/

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);