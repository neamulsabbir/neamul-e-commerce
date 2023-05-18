import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Cart from '../Pages/Main/Cart/Cart';
import Home from '../Pages/Main/Home/Home';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import AddProduct from '../Pages/Dashboard/AddProduct/AddProduct';
import EditProduct from '../Pages/Dashboard/EditProduct/EditProduct';
import SignUp from '../Pages/Main/SignUp/SignUp';
import SignIn from '../Pages/Main/SignIn/SignIn';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Categories from '../Pages/Main/Home/ProuductsSection/Categories/Categories';
import ProductDetails from '../Pages/Main/Home/ProuductsSection/ProductDetails/ProductDetails';
import DashboardProducts from '../Pages/Dashboard/DashboardProducts/DashboardProducts';
import CategoryItemEdit from '../Pages/Dashboard/DashboardProducts/DashboardProduct/CategoryItemEdit/CategoryItemEdit';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: "/category/:name",
                element:<Categories />
            },
            {
                path: "/product/:slug",
                element: <ProductDetails />
            },
            {
                path: '/checkout',
                element: <CheckOut />
            }
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: "/dashboard",
                element: <DashboardProducts></DashboardProducts>
            },
            {
                path: '/dashboard/add-product/:id',
                element: <AddProduct />
            },
            {
                path: '/dashboard/edit-product/:id',
                element: <EditProduct />
            },
            {
                path: '/dashboard/category-item-edit/:id',
                element: <CategoryItemEdit />
            }
        ]
    }
]);
