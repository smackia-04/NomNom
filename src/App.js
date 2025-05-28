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
import SignIn from "./components/SignIn.js"
import Help from "./components/Help.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import store from "./utils.js/store.js";

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
                path : "help",
                element : <Help />,
            },
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "signin",
                element : <SignIn />,
            },
            {
                path : "/cart",
                element : <Suspense fallback = {<Shimmer />}> <Cart /> </Suspense>,
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