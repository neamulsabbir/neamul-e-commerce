import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import Wishlist from '../Pages/Wishlist/Wishlist';
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn';
import Categories from '../Pages/Home/ProuductsSection/ShowCategories/Categories/Categories';
import ProductDetails from '../Pages/Home/ProuductsSection/ProductDetails/ProductDetails';
import ECart from '../Pages/ECart/ECart';
import CheckOut from '../CheckOut/CheckOut';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: "/category/:name",
                element:<Categories></Categories>
            },
            {
                path: "/product/:slug",
                element: <ProductDetails></ProductDetails>
            },
            // {
            //     path: "/ecart",
            //     element: <ECart></ECart>
            // },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            }
        ]
    }
]);
