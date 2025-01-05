import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
  } from "react-router";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";




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
        <Outlet />
        <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/home",
                element : <Home />,
            },
            {
                path : "/contact",
                element : <Contact />,
            },
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/restaurant/:restaurantId",
                element : <RestaurantMenu />
            }

        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)