import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn';
import Categories from '../Pages/Home/ProuductsSection/ShowCategories/Categories/Categories';
import ProductDetails from '../Pages/Home/ProuductsSection/ProductDetails/ProductDetails';
import CheckOut from '../CheckOut/CheckOut';
import Dashboard from '../Layouts/Dashboard/Dashboard';

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
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {

            }
        ]
    }
]);
