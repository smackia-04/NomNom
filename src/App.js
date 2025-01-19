import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
  } from "react-router";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";

const About = lazy(() => import("./components/About.js"))


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
                path : "about",
                element : <Suspense fallback = {<Shimmer/ >}><About /></Suspense>,
                children : [
                    {
                        path : "profile",
                        element : <Profile />
                    }
                ]
            },
            {
                path : "home",
                element : <Home />,
            },
            {
                path : "contact",
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