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
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import store from "./utils.js/store.js";

const About = lazy(() => import("./components/About.js"))
const Cart = lazy(() => import("./components/Cart.js"))


const AppLayout = () => {
    return (
        <Provider store = {store}>
        <Header />
        <Outlet />
        <Footer />
        </Provider>
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
                path : "/",
                element : <Body />,
            },
            {
                path : "contact",
                element : <Contact />,
            },
            {
                path : "/cart",
                element : <Suspense fallback = {<Shimmer />}> <Cart /> </Suspense>,
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